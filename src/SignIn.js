
import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignIn() {
  return (
    <div className="sign-up-container">
      <h2>Sign In</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <button type="submit" className="sign-up-btn">Sign In</button>
      </form>

      <p className="form-link">
        Don't have an account? <Link to="/sign-up">Sign up here</Link>
      </p>
    </div>
  );
}

export default SignIn;

