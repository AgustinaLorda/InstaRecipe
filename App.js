import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import SignUp from "./pages/SignUp"; // Import Sign Up
import SignIn from "./pages/SignIn"; // Import Sign In
import ForgotPassword from "./pages/ForgotPassword"; // Import Forgot Password

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signup" element={<SignUp />} /> {/* Add Sign Up route */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add Forgot Password route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
