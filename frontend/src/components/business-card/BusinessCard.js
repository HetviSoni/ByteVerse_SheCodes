import './businesscard.css';

const BusinessCard = (props) => {
    return (
        
        <div className="business-card">
            <div className="line">
                <span className="name">{props.name}</span>
                <span className="rating">{+(Math.random() * (5 - 3) + 3).toFixed(1)} <i class="fa-solid fa-star" style={{ color: '#6E68E3' }}></i></span>
            </div>
            <div className="line">
                <span>Jobs completed: {props.jobs_completed}</span>
            </div>
            <div className="line"><div className="skills" ><span style={{ color: 'black' }} >
                Skills:</span>
                {props.skills.map((skill, index) => (
                    <span key={index}>{skill}</span>
                ))}
            </div> <span >View details <i class="fa-solid fa-angle-right"></i></span> </div>
        </div>
    )
}
export default BusinessCard;