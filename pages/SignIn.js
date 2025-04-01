import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="signin-page">
      <div className="form-container">
        <h2>Sign In</h2>
        <form className="signin-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="btn">Sign In</button>
        </form>
        <div className="options">
          <p>
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}