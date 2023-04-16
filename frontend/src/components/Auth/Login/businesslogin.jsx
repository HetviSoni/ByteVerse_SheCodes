import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import "./businesslogin.scss";
import logo from "../../../assets/images/logo_name.svg";


const BusinessLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useState('');
  // const [error, setError] = useState('');
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
      // .catch(error => {
      //   // Handle login error
        // setError('Invalid email or password');
      // });
  }
  return (
    <div className="businesslogin">
      <div className="businesslogin_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="businesslogin_box">
        <div className="businesslogin_box_title">Login</div>
        <div className="businesslogin_box_form">
          <input
            type="text"
            placeholder="Email"
            id="customer_login_input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            id="customer_login_input"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="businesslogin_box_submit">
          <input
            type="button"
            value="Login"
            id="business_login_submit"
            onClick={handleLogin}
          />
        </div>
        <div className="businesssignup_box_login">
          Don't have an account? <a href="/businesssignup">Signup</a>
        </div>
      </div>
    </div>
  );
};
export default BusinessLogin;
