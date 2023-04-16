import { Link } from "react-router-dom";
import { useState } from "react";

import "./customersignup.scss";
import logo from "../../../assets/images/logo_name.svg";
import girls from "../../../assets/images/woman.svg";

const CustomerSignup = () => {
  const [passwordConfirm, setPasswordConfirm] = useState("false");
  const check = () => {
    const pass = document.getElementById("customer_signup_pass").value;
    const confirm_pass = document.getElementById(
      "customer_signup_confirm"
    ).value;
    if (pass === confirm_pass) {
      setPasswordConfirm("true");
      document.getElementById("message").style.color = "green";
      document.getElementById("message").innerHTML = "passwords match";
    } else {
      document.getElementById("message").style.color = "red";
      document.getElementById("message").innerHTML = "password not matched";
    }
  };
  return (
    <div className="customersignup">
      <div className="customersignup_text">
        <div className="customersignup_text_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="customersignup_text_content">
          <div className="customersignup_text_content_title">Signup</div>
          <div className="customersignup_text_content_form">
            <input type="text" placeholder="Email" id="customer_signup_input" />
            <input
              type="text"
              placeholder="First Name"
              id="customer_signup_input"
            />
            <input
              type="text"
              placeholder="Last Name"
              id="customer_signup_input"
            />

            <input
              type="type"
              placeholder="Phone Number"
              id="customer_signup_input"
            />
            <input
              type="text"
              placeholder="Password"
              id="customer_signup_pass"
              onKeyUp={check}
            />
            <input
              type="password"
              id="customer_signup_confirm"
              placeholder="Confirm password"
              onKeyUp={check}
            />
            <span id="message"></span>
          </div>
          <div className="customersignup_text_content_submit">
            <input type="button" value="Signup" id="customer_login_submit" />
          </div>
          <div className="customersignup_text_content_signup">
            <div className="customersignup_text_content_signup_text">
              Already have an account?
            </div>
            <div className="customersignup_text_content_signup_link">
              <Link to="/customerlogin">Login</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="customersignup_img">
        <img src={girls} alt="woman_img" height="100%" />
      </div>
    </div>
  );
};
export default CustomerSignup;
