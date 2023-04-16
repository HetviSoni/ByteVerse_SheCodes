import "./landing.scss";
import { useState } from "react";

import logo from "../../../assets/images/logo_name.svg";
import img from "../../../assets/images/carousel_1.png";
import { Link } from "react-router-dom";

const Landing = () => {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  return (
    <div className="landing">
      <div className="landing_navbar">
        <div className="landing_navbar_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="landing_navbar_btns">
          <div className="landing_navbar_btns_login">
            <input
              type="button"
              value="Login"
              id="login_landing"
              onClick={() => {
                setLogin(!login);
              }}
            />

            {login ? (
              <div>
                <div id="menu_1">Business</div>
                <div id="menu_2">
                  <Link to="/customerlogin">Customer</Link>
                </div>
              </div>
            ) : null}
          </div>
          <div className="landing_navbar_btns_signup">
            <input
              type="button"
              value="Signup"
              id="signup_landing"
              onClick={() => {
                setSignup(!signup);
              }}
            />
            {signup ? (
              <div>
                <div id="menu_1">Business</div>
                <div id="menu_2">Customer</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="landing_content">
        <div className="landing_content_text">
          <div className="landing_content_text_t">
            The platform was built with a vision to help small-scale women
            artisans find the right market for their products. Udaan empowers
            small-scale women artisans with a sustainable livelihood, bridging
            the gap between them and the market.
            <br />
            <br />
            The user-friendly platform allows them to showcase their talent and
            creativity, take control of their lives, and soar in the sky of
            their dreams.
          </div>
          <input type="button" value="Know the team" id="team" />
        </div>
        <div className="landing_content_img">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
