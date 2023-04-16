import RequestCard from "../../components/request-card/RequestCard";
import CustomerNavbar from "../../components/customer-navbar/CustomerNavbar";
import './dashboard.css';
const CustomerDashboard = () => {
    const heading1 = "Pending Requests";
    const heading2 = "Accepted Requests";
    return (
        <>
        <CustomerNavbar goto="homepage"/>
            <div className="customer-dashboard">
                <div className="dashboard-left">
                    <RequestCard heading={heading1} theme="purple" />
                    <RequestCard heading={heading2} theme="white" />
                </div>
                <div className="dashboard-right">
                    <div className="request-box">
                        <h3>Requests Completed</h3>
                        <div className="request-card">
                            <div><span>Preeti</span><span>Job:Nail Art</span> </div>
                            <div><span>Date:12-04-2024</span><span>Time:10:00pm</span> </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
export default CustomerDashboard;