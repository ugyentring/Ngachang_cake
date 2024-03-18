import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pizzaBackground from "../img/a8631fd8be1040f7f18e80f3846d9398.jpg";
import { EyeIcon } from "../assets/icons/Icons";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: null, // Set initial errors to null
    password: null, // Set initial errors to null
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "email":
        newErrors.email = !value
          ? "Email is required"
          : /\S+@\S+\.\S+/.test(value)
          ? null // Set to null when valid
          : "Invalid email address";
        break;
      case "password":
        newErrors.password = !value
          ? "Password is required"
          : value.length < 6
          ? "Password must be at least 6 characters long"
          : null; // Set to null when valid
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${pizzaBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/75 backdrop-blur-md rounded-lg p-8 w-full md:w-96 text-center shadow-lg text-sm">
        <h2 className="text-2xl font-bold mb-6 text-white">Admin Login</h2>
        <form>
          <div className="mb-3">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className={`w-full rounded-lg p-3 mb-1 text-white bg-opacity-75 border ${
                errors.email ? "border-red-500" : ""
              } bg-transparent placeholder-white placeholder-opacity-50 focus:outline-none focus-${
                errors.email ? "border-red-500" : ""
              }`}
              onChange={handleChange}
            />

            <p
              className={`text-red-500 text-left text-xs ${
                errors.email ? "" : "opacity-0"
              }`}
            >
              {errors.email ? errors.email : "Error Place"}
            </p>
          </div>
          <div className="mb-3">
            <div className="relative mb-1">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                className={`w-full rounded-lg p-3 text-white bg-opacity-75 border ${
                  errors.password ? "border-red-500" : ""
                } bg-transparent placeholder-white placeholder-opacity-50 focus:outline-none focus-${
                  errors.password ? "border-red-500" : ""
                }`}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-3 -translate-y-1/2"
              >
                <EyeIcon isActive={showPassword} />
              </button>
            </div>

            <p
              className={`text-red-500 text-left text-xs ${
                errors.password ? "" : "opacity-0"
              }`}
            >
              {errors.password ? errors.password : "Error Place"}
            </p>
          </div>
          <div className="buttons w-full flex justify-between">
            <Link to="/dashboard" className="w-full">
              <button
                type="submit"
                className="bg-[#FF5733] text-white w-full px-6 py-3 rounded-lg hover:bg-opacity-75 transition duration-300"
              >
                Login
              </button>
            </Link>
          </div>
        </form>

        {/* <p className="mt-12 text-center text-gray-400 text-white">
          No account?{" "}
          <Link to="/register" className="text-[#FF5733] hover:underline">
            Register
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default Login;
