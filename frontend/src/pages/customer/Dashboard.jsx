import RequestCard from "../../components/request-card/RequestCard";
import Navbar from "../../components/Navbar";
import './dashboard.css';
const CustomerDashboard = () => {
    const heading1 = "Pending Requests";
    const heading2 = "Accepted Requests";
    return (
        <>
        <Navbar/>
            <div className="customer-dashboard">
                <div className="dashboard-left">
                    <RequestCard heading={heading1} theme="purple" />
                    <RequestCard heading={heading2} theme="white" />
                </div>
                <div className="dashboard-right">
                    <div className="request-box">
                        <h3>Requests Completed</h3>
                        <div className="request-card">
                            <div><span>Hetvi Soni</span><span>Job:</span> </div>
                            <div><span>Date:</span><span>Time:</span> </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
export default CustomerDashboard;