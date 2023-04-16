import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

import "./customerlogin.scss";
import girls from "../../../assets/images/woman.svg";
import logo from "../../../assets/images/logo_name.svg";

const login_url = "/api/accounts/login/";

const Customerlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();
  const handleLogin = () => {
    // Send login request to Django backend
    axios.post('https://udaan.pythonanywhere.com/api/accounts/login/', { email, password })
      .then(response => {
        // Store the access token in local storage
        localStorage.setItem('accessToken', response.data.access);
        console.log("toke is "+accessToken);
        // Set the access token in the state to display on the screen
        setAccessToken(response.data.access);
        console.log(response.data)
        if(response.data.status==='Success!')
        {
          history('/customer-homepage')
        }
        // Redirect to dashboard or perform other actions upon successful login
      })
      .catch(error => {
        // Handle login error
        setError('Invalid email or password');
      });
  }

  return (
    <div className="customerlogin">
      <div className="customerlogin_text">
        <div className="customerlogin_text_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="customerlogin_text_content">
          <div className="customerlogin_text_content_title">Login</div>
          <div className="customerlogin_text_content_form">
            <input
              type="email"
              placeholder="Email"
              value={email} 
              id="customer_login_input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password} 
              id="customer_login_input"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="customerlogin_text_content_submit">
            <input
              type="button"
              value="Login"
              id="submit"
              onClick={handleLogin}
            />
          </div>
          {/* {accessToken && <p>Access Token: {accessToken}</p>} */}
          <div className="customerlogin_text_content_signup">
            Don't have an account? <a href="/customersignup">Signup</a>
          </div>
        </div>
      </div>
      <div className="customerlogin_img">
        <img src={girls} alt="woman_img" height="100%" />
      </div>
    </div>
  );
};
export default Customerlogin;
