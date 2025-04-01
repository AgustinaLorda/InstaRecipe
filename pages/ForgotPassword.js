import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="forgot-password-page">
      <div className="form-container">
        <h2>Forgot Password</h2>
        <form className="forgot-password-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <button type="submit" className="btn">Reset Password</button>
        </form>
        <div className="options">
          <p>
            Remember your password? <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}