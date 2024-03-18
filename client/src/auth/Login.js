import { useState } from "react";
import LoginForm from "../components/LoginForm";
import { toast } from "react-toastify";
import { login } from "./../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("send login data", { email, password });
    try {
      let res = await login({
        email,
        password,
      });
      console.log("Login Response ==>", res);
      if (res.data) {
        console.log("Save user in Redux and local storage then redirect");
        //save user and token to local storage
        window.localStorage.setItem("auth", JSON.stringify(res.data));
        //save user and token to redux
        dispatch({
          type: "LOGGED_IN",
          payload: res.data,
        });
        // Redirect to the home page
        navigate('/');
      }
      toast.success("Login successful!");
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };
  return (
    <>
      <div className="container-fluid bg-info p-5 text-center">
        <h1>Login Page</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <LoginForm
              handleSubmit={handleSubmit}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
