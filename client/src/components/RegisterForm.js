// import React from "react";
// import "./RegisterForm.css";

// const RegisterForm = ({
//   handleSubmit,
//   name,
//   setName,
//   email,
//   setEmail,
//   password,
//   setPassword,
//   confirmPassword,
//   setConfirmPassword,
//   passwordStrength,
// }) => (
//   <div className="container0">
//     <div className="container">
//       <h1 className="form-title">Registration</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="main-user-info">
//           <div className="user-input-box">
//             <label htmlFor="fullName">Full Name</label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               placeholder="Enter Full Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={setPassword}
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>
//           <div className="strength-meter">{passwordStrength}</div>
//         </div>
//         <div className="form-submit-btn">
//           <input type="submit" value="Register" />
//         </div>
//       </form>
//     </div>
//   </div>
// );

// export default RegisterForm;
import React from "react";
import "./RegisterForm.css";

const RegisterForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  passwordStrength,
  isPasswordVisible,
  togglePasswordVisibility,
}) => (
  <div className="container0">
    <div className="container">
      <h1 className="form-title">Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="main-user-info">
          <div className="user-input-box">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="user-input-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="user-input-box">
            <label htmlFor="password">Password</label>
            <input
              type={isPasswordVisible ? "text" : "password"} // Toggle visibility here
              id="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={setPassword}
            />
          </div>
          <div className="user-input-box">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="strength-meter">{passwordStrength}</div>
        </div>
        <div className="form-submit-btn">
          <input type="submit" value="Register" />
        </div>
      </form>
      <span onClick={togglePasswordVisibility} className="toggle-password">
        {isPasswordVisible ? "Hide" : "Show"}
      </span>
    </div>
  </div>
);

export default RegisterForm;
