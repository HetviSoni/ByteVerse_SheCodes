import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profilepage from "./pages/business/Profilepage";
import CustomerHomePage from "./pages/customer/homepage";
import Landing from "./components/Auth/Landing/landing";
import WorkerProfile from "./pages/customer/workerprofile";
import Customerlogin from "./components/Auth/Login/customerlogin";
import Customersignup from "./components/Auth/Signup/customersignup";
import Dashboard from "./pages/business/Dashboard";
import Buildprofile from "./pages/business/Buildprofile";
import CustomerDashboard from "./pages/customer/Dashboard";
import BusinessLogin from "./components/Auth/Login/businesslogin";
import BusinessSignup from "./components/Auth/Signup/businesssignup";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/customer-homepage"
            caseSensitive={false}
            element={<CustomerHomePage />}
          />
          <Route
            path="/customer-dashboard"
            caseSensitive={false}
            element={<CustomerDashboard />}
          />
          <Route
            path="/worker-profile"
            caseSensitive={false}
            element={<WorkerProfile />}
          />
          <Route exact path="/" caseSensitive={false} element={<Landing />} />
          <Route exact path="/build-profile" element={<Buildprofile />} />
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
          <Route exact path="/business-profile" element={<Profilepage />} />
          <Route exact path="/skill-dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
