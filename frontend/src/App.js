import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Auth/Landing/landing";
import Customerlogin from "./components/Auth/Login/customerlogin";
import Customersignup from "./components/Auth/Signup/customersignup";
import BusinessLogin from "./components/Auth/Login/businesslogin";
import BusinessSignup from "./components/Auth/Signup/businesssignup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" caseSensitive={false} element={<Landing />} />
          <Route
            path="/customerlogin"
            caseSensitive={false}
            element={<Customerlogin />}
          />
          <Route
            path="/customersignup"
            caseSensitive={false}
            element={<Customersignup />}
          />
          <Route
            path="/businesslogin"
            caseSensitive={false}
            element={<BusinessLogin />}
          />
          <Route
            path="/businesssignup"
            caseSensitive={false}
            element={<BusinessSignup />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
