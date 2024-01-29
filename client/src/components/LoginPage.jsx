// client/src/components/LoginPage.jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../contexts/context";
import { IoMdCloseCircle } from "react-icons/io";
import "./LoginPage.scss";

export default function LoginPage({ openRegisterModal }) {
  const { setUser, closeModal } = useContext(MyContext);

  const loginUser = async (e) => {
    e.preventDefault();

    const loginInfo = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    console.log("Login Info", loginInfo);

    // FETCHING USER LOGIN AND PASSWORD FROM SERVER, IF THEY DON´T EXIST, GIVING AN ERROR
    try {
      const response = await fetch("http://localhost:8090/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      if (response.ok) {
        //login successful, display success alert
        alert("Login successful!");
        closeModal(); // Close the modal or redirect the user as needed
      } else {
        // Login failed, display error alert
        alert("Login failed. Please check your credentials and try again.");
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error("Error during login:", error);
      alert("Error during login. Please try again.");
    }
  };

  return (
    <div className="loginpage">
      <IoMdCloseCircle className="close-button" onClick={closeModal} />
      <Link className="loginpage-child" to="/" />
      <div className="welcome-back-parent">
        <h2 className="welcome-back">{`Welcome  back `}</h2>
        <p className="please-enter-your-email">
          Please enter your Email and Password to log in
        </p>
      </div>
      <form className="email-form" action="" onSubmit={loginUser}>
        <label className="email2">User Name</label>
        <span className="email-container">
          <input
            className="email3"
            type="text"
            id="username"
            name="username"
            placeholder="User Name"
          />
        </span>
        <label className="email2">Password</label>
        <span className="email-container">
          <input
            className="email3"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </span>
        <button type="submit" className="log-in-wrapper">
          <div className="log-in">Log In</div>
        </button>
      </form>

      <div className="dont-have-an-account-yet-parent">
        <h3 className="dont-have-an">Don't have an account yet?</h3>
        <button className="registerButton" onClick={openRegisterModal}>
          <div className="loregisterButtonSubmit">Create account</div>
        </button>
      </div>
    </div>
  );
}
