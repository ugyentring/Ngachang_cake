import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { toast } from "react-toastify";
import { register } from "./../actions/auth";
import { useNavigate } from "react-router-dom";
import zxcvbn from "zxcvbn";
import "./RegisterForm.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordMeterClass, setPasswordMeterClass] = useState("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handlePasswordChange = (e) => {
    // e.preventDefault();
    const value = e.target.value;
    setPassword(value);

    // Use the zxcvbn library to check the strength of the password
    const passwordCheck = zxcvbn(value);

    // Determine a custom message based on the password's strength
    let customMessage = "";
    let meterClass = "";
    switch (passwordCheck.score) {
      case 0:
        customMessage = "Very Weak! Please use a stronger password.";
        meterClass = "weak";
        break;
      case 1:
        customMessage =
          "Weak! Consider adding more complexity to your password.";
        meterClass = "weak";
        break;
      case 2:
        customMessage =
          "Fair! It's a decent password, but you can make it stronger.";
        meterClass = "medium";
        break;
      case 3:
        customMessage = "Strong! Your password is looking good.";
        meterClass = "strong";
        break;
      case 4:
        customMessage = "Very Strong! Excellent choice for a password.";
        meterClass = "very-strong";
        break;
      default:
        customMessage = "Password strength is unknown.";
        meterClass = "";
    }

    // Update the state variables with the password strength and meter class
    setPasswordStrength(customMessage);
    setPasswordMeterClass(meterClass);
    const strengthClass = `strength-${passwordCheck.score}`;
    document.querySelector(
      ".strength-meter"
    ).className = `strength-meter ${strengthClass}`;
  };
  const isPasswordValid = (password) => {
    if (password.length < 8) {
      toast.error(
        "Password is not valid, password should be minimum of length 8."
      );
      return false;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error(
        "Password is not valid, password should include mixture of uppercase characters."
      );
      return false;
    }
    if (!/[a-z]/.test(password)) {
      toast.error(
        "Password is not valid, password should include mixture of a lowercase characters."
      );
      return false;
    }
    if (!/[0-9]/.test(password)) {
      toast.error(
        "Password is not valid, password should mixture of include numbers."
      );
      return false;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      toast.error(
        "Password is not valid, password should include a mixture of special characters."
      );
      return false;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic client-side validation
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all the required fields.");
      return;
    }
    // Validate the 'name' field
    if (!/^[a-zA-Z\s]*$/.test(name)) {
      toast.error(
        "Name should contain only alphabetic characters and spaces only."
      );
      return;
    }

    if (!/^.{3,30}$/.test(name)) {
      toast.error("Name should be of 3-30 characters");
      return;
    }

    // Validate the 'email' field
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/.test(email)) {
      toast.error("Invalid email format, correct format: 'example@gmail.com'");
      return;
    }

    // Validate the 'password' field
    if (!isPasswordValid(password)) {
      return;
    }

    if (zxcvbn(password).score < 3) {
      toast.error("Password is weak.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password and confirm password are not same.");
      return;
    }

    // Additional password strength validation using zxcvbn library
    const passwordCheck = zxcvbn(password);
    if (passwordCheck.score < 3) {
      toast.error(
        "Password is weak. " + passwordCheck.feedback.suggestions.join(" ")
      );
      return;
    }

    try {
      const res = await register({
        name,
        email,
        password,
      });
      console.log("Register User ==>", res);
      toast.success("Registration successful. Login NOW!");
      navigate("/login");
    } catch (err) {
      console.log("Axios Error:", err);
      if (err.response) {
        console.error("Response Status:", err.response.status);
        console.error("Response Data:", err.response.data);
        toast.error(err.response.data);
      }
    }
  };

  return (
    <>
      <RegisterForm
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={handlePasswordChange}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        passwordStrength={passwordStrength}
        passwordMeterClass={passwordMeterClass}
        isPasswordVisible={isPasswordVisible}
        togglePasswordVisibility={togglePasswordVisibility}
      />
    </>
  );
};

export default Register;
