import { async } from "@firebase/util";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { googleSignIn , signUp} = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password ,setPassword] = useState("");
  const [confirmPassword , setConfirmPassword] = useState("");
  const [agree , setAgree] = useState("");
  const [error ,setError] = useState("")
  const [success ,setSuccess] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then(() => {
      navigate(from, { replace: true });
    });
  };

  async function handleSignUp (e) {
      e.preventDefault();
      if(password !== confirmPassword) {
           return setError("Password Not Match")
      }
      try {
            setError("");
            setSuccess("User Created Successfully");
            await signUp(email, password, name)

      } catch(error) {
          setError("This Account Already Used . Try Another Account");
          setSuccess("")
          console.log(error);

      }
  }

  return (
    <div className="container mt-4">
      <form onSubmit={handleSignUp}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            required
            value={agree}
            onChange={(e) => setAgree(e.target.value)}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        {error && <h3 className="text-danger text-center">{error}</h3>}
        {success && <h3 className="text-primary text-center">{success}</h3>}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <button className="btn btn-info btn-l mt-4" onClick={handleGoogleSignIn}>
        Google Sign In
      </button>
      <br />
      <p className="mt-3">
        Already Have An Account <Link to="/login">Please Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
