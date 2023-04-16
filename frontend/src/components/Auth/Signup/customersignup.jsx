import { useState } from "react";
import { useNavigate} from 'react-router-dom'
import "./customersignup.scss";
import logo from "../../../assets/images/logo_name.svg";
import girls from "../../../assets/images/woman.svg";
import axios from 'axios';

const CustomerSignup = () => {
 
  const history = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    first_name:"",
    last_name:"",
    contact_no:"",
    location:"",
    is_business: false,
    is_customer: true,
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert is_business and is_customer to boolean values
    const { email, first_name, last_name, contact_no,location, password} = formData;
    const requestBody = {
      email,
      first_name,
      last_name,
      contact_no,
      location,
      password,
      is_business:"false",
      is_customer: "true"
    };

    try {
      const response = await axios.post(
        "https://udaan.pythonanywhere.com/api/accounts/register/",
        requestBody
      );
      if (response.status === 200) {
        // Navigate to /login when response status is 200
        history("/customerlogin");
      }
      console.log("Response:", response.data);
      // Handle successful response here
    } catch (error) {
      console.error("Error:", error);
      // Handle error here
    }
  };

  const check = () => {
    const pass = document.getElementById("customer_signup_pass").value;
    const confirm_pass = document.getElementById(
      "customer_signup_confirm"
    ).value;
    if (pass === confirm_pass) {
      document.getElementById("submit").style.backgroundColor = "#6e68e3";
    } else {
      document.getElementById("submit").style.backgroundColor = "#d3d3d3";
    }
  };
  return (
    <>
        <div className="customersignup">
          <div className="customersignup_text">
            <div className="customersignup_text_logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="customersignup_text_content">
              <div className="customersignup_text_content_title">Signup</div>
              <div className="customersignup_text_content_form">
                <input
                  type="text"
                  placeholder="Email"
                  id="customer_signup_input"
                  name="email"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="First Name"
                  id="customer_signup_input"
                  name="first_name"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  id="customer_signup_input"
                  name="last_name"
                  onChange={handleChange}
                />

                <input
                  type="type"
                  placeholder="Phone Number"
                  id="customer_signup_input"
                  name="contact_no"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  id="customer_signup_pass"
                  name="password"
                  onKeyUp={check}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  id="customer_signup_confirm"
                  placeholder="Confirm password"
                  onKeyUp={check}
                />
              </div>
              <div className="customersignup_text_content_submit">
                <input
                  type="button"
                  value="Signup"
                  id="submit"
                  onClick={handleSubmit}
                />
              </div>
              <div className="customersignup_text_content_login">
                Already have an account? <a href="/customerlogin">Login</a>
              </div>
            </div>
          </div>
          <div className="customersignup_img">
            <img src={girls} alt="woman_img" height="100%" />
          </div>
        </div>
    </>
  );
};
export default CustomerSignup;
