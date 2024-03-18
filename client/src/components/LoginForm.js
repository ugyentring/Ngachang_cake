import React from "react";

const LoginForm = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
}) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <input
        type="email"
        className="form-control m-3"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control m-3"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>

    <button disabled={!email || !password} type="submit" className="btn btn-primary m-3">
      Submit
    </button>
  </form>
);
export default LoginForm;
