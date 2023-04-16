import { useState } from "react";
import axios from 'axios';
import "./businesssignup.scss";
import logo from "../../../assets/images/logo_name.svg";
import { useNavigate} from 'react-router-dom'

const BusinessSignup = () => {
   
  const history = useNavigate();
  const check = () => {
    let pass = document.getElementById("business_signup_pass").value;
    let confirm = document.getElementById("business_signup_confirm").value;
    if (pass === confirm) {
      document.getElementById("submit").style.backgroundColor = "#6e68e3";
    } else {
      document.getElementById("submit").style.backgroundColor = "#d3d3d3";
    }
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    is_business: true,
    is_customer: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Convert is_business and is_customer to boolean values
    const { email, password } = formData;
    const requestBody = {
      email,
      password,
      is_business: "true",
      is_customer: "false"
    };

    try {
      const response = await axios.post(
        "https://udaan.pythonanywhere.com/api/accounts/register/",
        requestBody
      );
      console.log("Response:", response.data);
      if (response.status === 200) {
        // Navigate to /login when response status is 200
        history("/businesslogin");
      }
      // Handle successful response here
    } catch (error) {
      console.error("Error:", error);
      // Handle error here
    }
  };

  return (
    <>
      {/* {otp === "true" ? (
        <OTPComponent mail={mail} />
      ) : ( */}
        <div className="businesssignup">
          <div className="businesssignup_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="businesssignup_box">
            <div className="businesssignup_box_title">Signup</div>
            <div className="businesssignup_box_form">
              <input
                type="text"
                placeholder="Email"
                name="email"
                id="business_login_input"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                id="business_signup_pass"
                value={formData.password}
                onKeyUp={check}
                onChange={handleChange}
                name="password"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                id="business_signup_confirm"
                onKeyUp={check}
              />
            </div>
            <div
              className="businesssignup_box_submit"
              id="submit"
              onClick={handleSignup}
            >
              Signup
            </div>
            <div className="businesssignup_box_login">
              Already have an account? <a href="/businesslogin">Login</a>
            </div>
          </div>
        </div>
      {/* )} */}
    </>
  );
};
export default BusinessSignup;
