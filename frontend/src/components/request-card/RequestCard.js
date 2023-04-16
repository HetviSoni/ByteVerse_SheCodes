import './requestcard.css';
const RequestCard = (props) => {
    return (
        <div className="request-box">
            <h3> {props.heading}</h3>
            <div className="request-card" id={props.theme}>
                <div  id={props.theme}><span>Hetvi Soni</span><span>Job:</span> </div>
                <div  id={props.theme}><span>Date:</span><span>Time:</span> </div>
            </div>
            <div className="request-card" id={props.theme}>
                <div  id={props.theme}><span>Hetvi Soni</span><span>Job:</span> </div>
                <div  id={props.theme}><span>Date:</span><span>Time:</span> </div>
            </div>
            <div className="request-card" id={props.theme}>
                <div  id={props.theme}><span>Hetvi Soni</span><span>Job:</span> </div>
                <div  id={props.theme}><span>Date:</span><span>Time:</span> </div>
            </div>
            <div className="request-card" id={props.theme}>
                <div  id={props.theme}><span>Hetvi Soni</span><span>Job:</span> </div>
                <div  id={props.theme}><span>Date:</span><span>Time:</span> </div>
            </div>
        </div>

    )
}
export default RequestCard;