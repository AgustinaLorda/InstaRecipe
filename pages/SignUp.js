import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="signup-page">
      <div className="form-container">
        <h2>Create an Account</h2>
        <form className="signup-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" required />
          </div>
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <div className="options">
          <p>
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
          <p>
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}