import './workerprofile.css';
import { useState } from 'react';
import profile from '../../assets/images/dp.jpg';

const WorkerProfile = (props) => {
    const tableData = [
        { Client: "John", Job: "Mehendi", rating: "3", price: "125" },
        { Client: "Jane", Job: "Wall painting", rating: "3.5", price: "245" },
        { Client: "Bob", Job: "Card Design", rating: "4", price: "1225" },
        { Client: "Sara", Job: "Mehendi", rating: "5", price: "125" },
    ];
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted form');
        // Add code to submit form data here
    }
    return (
        <div className="workerprofile">
            <div className="info">
                <div className="dp"><img src={profile}></img></div>
                <div className="description">
                    <div className="worker-name">
                        {props.name}
                    </div>
                    <div className="links">
                        <i class="fa-brands fa-instagram fa-2x" ></i>
                        <i class="fa-brands fa-square-facebook fa-2x"></i>
                        <i class="fa-brands fa-youtube fa-2x"></i>
                    </div>
                    <div className="contact">
                        <button>Message</button>
                    </div>
                </div>
            </div>
            <div className="profile-bottom">
                <div className="past-work">
                    <h4>Jobs Completed</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ flex: "2" }}>Client</th>
                                <th style={{ flex: "2" }}>Job</th>
                                <th style={{ flex: "1" }}>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr key={index}>
                                    <td style={{ flex: "2" }}>{row.Client}</td>
                                    <td style={{ flex: "2" }}>{row.Job}</td>
                                    <td style={{ flex: "1" }}>{row.rating}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="worker-skills">
                    <h4>Services Offered</h4>
                    {isOpen && (<div className="popup-container">
                        <div className="popup-content">
                            <span className="close" onClick={closePopup}>&times;</span>
                            <form className="request-form" onSubmit={handleSubmit}>
                                <label htmlFor="date">Date:</label><br></br>
                                <input type="date" id="date" name="date" required /><br></br>

                                <label htmlFor="time">Time:</label><br></br>
                                <input type="time" id="time" name="time" required /><br></br>

                                <label htmlFor="description">Description:</label><br></br>
                                <textarea id="description" name="description" required /><br></br>

                                <input className="submit" type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                    )}
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ flex: "2" }}>Skill</th>
                                <th style={{ flex: "1" }}>Rate in INR</th>
                                <th style={{ flex: "1" }}>Request a service</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr key={index}>
                                    <td style={{ flex: "2" }}>{row.Job}</td>
                                    <td style={{ flex: "1" }}>{row.price}</td>
                                    <td style={{ flex: "1" }}><i class="fa-sharp fa-solid fa-arrow-right" id="open-form" onClick={openPopup} ></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
export default WorkerProfile;