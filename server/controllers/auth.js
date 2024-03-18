import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const showMessage = (req, res) => {
  res.status(200).send(req.params.message);
};

export const register = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  if (!name) return res.status(400).send("Name is required");

  //password length validation for debugging
  if (!password || password.length < 6)
    return res.status(400).send("Password should be a minimum of 6 characters");
  try {
    // Check if the user with the same email already exists
    const userExist = await User.findOne({ where: { email } });
    if (userExist) return res.status(400).send("Email is taken");

    // Create a new user instance
    const newUser = User.build({ name, email, password });

    // Hash the password before saving the user
    const saltRounds = 12;
    const hash = await bcrypt.hash(newUser.password, saltRounds);
    // newUser.password = hash;

    // Save the user to the database
    await newUser.save();
    console.log("USER CREATED", newUser);
    return res.json({ ok: true });
  } catch (err) {
    console.error("CREATE USER FAILED", err);
    return res.status(400).send("Error, Try again");
  }
};

export const login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    // Find the user by email
    let user = await User.findOne({ where: { email } });
    //console.log("User Exist", user)
    // If the user doesn't exist, respond with an error
    if (!user) {
      console.log("User not found");
      return res.status(400).send("User not found");
    }
    // Compare the input password with the stored hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    // console.log("Stored Password Length:", user.password.length);
    // console.log("Input Password Length:", password.length);
    // console.log("Stored Hashed Password:", user.password);
    // console.log("Input Password:", password);
    if (!isPasswordMatch) {
      console.log("Wrong password");
      return res.status(400).send("Wrong password");
    }
    // Generate a token and send it as a response to the client
    //console.log('JWT_SECRET:', process.env.JWT_SECRET);
    let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (err) {
    console.error("Login error", err);
    res.status(500).send("Internal server error");
  }
};
