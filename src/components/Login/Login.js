import { async } from "@firebase/util";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { user, googleSignIn, login } = useFirebase();
  const [email , setEmail] = useState("")
  const [password ,setPassword] = useState("");
  const [succcess , setSuccess] = useState("");
  const [error ,setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";


  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(() => {
        navigate(from, { replace: true });
    })
  };

  async function handleLogin (e) {
      e.preventDefault();

      try{
        setError("");
        setSuccess("User Logging In Successfully")
        await login(email, password);
        navigate(from, { replace: true });

      } catch(error) {
        setError("Don't Have An Account. Please Create Your Account");
        setSuccess("");
        console.log(error)
      }
  }

  return (
    <div className="container mt-4">
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
            value={password}
            onChange={(e) => setPassword( e.target.value)}
          />
        </div>
        {error && <h3 className="text-danger text-center">{error}</h3>}
        {succcess && <h3 className="text-primary text-center">{succcess}</h3>}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <button className="btn btn-info btn-l mt-4" onClick={handleGoogleSignIn}>Google Sign In</button>

      <p className="mt-3">If Your Are A New User  <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;
