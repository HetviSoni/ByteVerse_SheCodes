import './requestcard.css';
const RequestCard = (props) => {
    return (
        <div className="request-box">
            <h3> {props.heading}</h3>
            <div className="request-card" id={props.theme}>
                <div  id={props.theme}><span>Hetvi Soni</span><span>Job:Mehendi</span> </div>
                <div  id={props.theme}><span>Date:22-04-2024</span><span>Time:3:00pm</span> </div>
            </div>
            <div className="request-card" id={props.theme}>
                <div  id={props.theme}><span>Hiral Parekh</span><span>Job:Paint</span> </div>
                <div  id={props.theme}><span>Date:22-04-2024</span><span>Time:2:00pm</span> </div>
            </div>
            <div className="request-card" id={props.theme}>
                <div  id={props.theme}><span>Somya Jain</span><span>Job:</span> </div>
                <div  id={props.theme}><span>Date:23-04-2024</span><span>Time:4:00pm</span> </div>
            </div>
            <div className="request-card" id={props.theme}>
                <div  id={props.theme}><span>Vranda patel</span><span>Job:</span> </div>
                <div  id={props.theme}><span>Date:24-04-2024</span><span>Time:10:00pm</span> </div>
            </div>
        </div>

    )
}
export default RequestCard;