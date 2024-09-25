import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  return (
    <div className="sign-up-container">
      <h2>Create Your Account</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <button type="submit" className="sign-up-btn">Sign Up</button>
      </form>

      <p className="form-link">
        Already have an account? <Link to="/sign-in">Sign in here</Link>
      </p>
    </div>
  );
}

export default SignUp;

