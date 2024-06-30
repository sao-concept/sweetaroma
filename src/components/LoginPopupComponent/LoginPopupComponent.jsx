// LoginPopupComponent.jsx
import React, { useContext, useState } from "react";
import "./LoginPopupComponent.scss";
import { assets } from "../../assets/assets";
import FirebaseAuth from "../../config/FirebaseAuth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextAPI/AuthContext"; // Import AuthContext

const {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithGooglePopup,
} = FirebaseAuth();

const LoginPopupComponent = ({ setShowLoginPage, setUserData }) => {
  const [currStateLogin, setCurrStateLogin] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext); // Use AuthContext

  const handleLogin = () => {
    signInWithEmailAndPassword(email, password)
      .then(() => {
        setErrorMessage("");
        setSuccessMessage("Login successful!");
        setTimeout(() => {
          setUserData({ email });
          signIn(); // Update AuthContext state
          navigate("/");
          setShowLoginPage(false);
        }, 2000);
      })
      .catch((error) => {
        setErrorMessage("Your email or password is incorrect");
        setSuccessMessage("");
        console.error("Login error:", error);
      });
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(email, password)
      .then(() => {
        setErrorMessage("");
        setSuccessMessage("Account created successfully!");
        setEmail("");
        setPassword("");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        setErrorMessage("Failed to create account. Please try again.");
        setSuccessMessage("");
        console.error("Signup error:", error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGooglePopup()
      .then((result) => {
        const { user } = result;
        setErrorMessage("");
        setSuccessMessage("Google sign-in successful!");
        setTimeout(() => {
          setUserData({ email: user.email });
          signIn(); // Update AuthContext state
          navigate("/");
          setShowLoginPage(false);
        }, 2000);
      })
      .catch((error) => {
        setErrorMessage("Google sign-in failed. Please try again.");
        setSuccessMessage("");
        console.error("Google sign-in error:", error);
      });
  };

  const switchMode = (mode) => {
    setCurrStateLogin(mode);
    setEmail("");
    setPassword("");
    setErrorMessage("");
    setSuccessMessage("");
  };

  return (
    <div className="login-popup-comp">
      <form
        className="login-popup-comp-container"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="login-popup-comp-title">
          <h2>{currStateLogin}</h2>
          <img
            src={assets.cross_icon}
            alt="close icon"
            onClick={() => setShowLoginPage(false)}
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        <div className="login-popup-comp-inputs">
          {currStateLogin === "Sign Up" && (
            <input type="text" placeholder="Enter your name here" required />
          )}
          <input
            type="email"
            placeholder="Enter your email here"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password here"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={currStateLogin === "Sign Up" ? handleSignUp : handleLogin}
        >
          {currStateLogin === "Sign Up" ? "Create account" : "Login"}
        </button>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="google-signin"
        >
          Sign in with Google
        </button>
        <div className="login-popup-comp-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currStateLogin === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => switchMode("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => switchMode("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopupComponent;
