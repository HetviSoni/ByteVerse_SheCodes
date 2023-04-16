import "./customerlogin.scss";
import girls from "../../../assets/images/woman.svg";
import logo from "../../../assets/images/logo_name.svg";
import { Link } from "react-router-dom";

const Customerlogin = () => {
  return (
    <div className="customerlogin">
      <div className="customerlogin_text">
        <div className="customerlogin_text_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="customerlogin_text_content">
          <div className="customerlogin_text_content_title">Login</div>
          <div className="customerlogin_text_content_form">
            <input type="text" placeholder="Email" id="customer_login_input" />
            <input
              type="password"
              placeholder="Password"
              id="customer_login_input"
            />
          </div>
          <div className="customerlogin_text_content_submit">
            <input type="button" value="Login" id="customer_login_submit" />
          </div>
          <div className="customerlogin_text_content_signup">
            <div className="customerlogin_text_content_signup_text">
              Dont have an account?
            </div>
            <div className="customerlogin_text_content_signup_link">
              <Link to="/customersignup">Signup</Link>
            </div>
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
