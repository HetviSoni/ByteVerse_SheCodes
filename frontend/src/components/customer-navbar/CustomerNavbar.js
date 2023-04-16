import './navbar.css';
import { useNavigate} from 'react-router-dom';

import logo from '../../assets/images/logo_name.svg';
const CustomerNavbar=(props)=>{
    const history = useNavigate();
    const goto=props.goto;
    return (
        <div className='customer-nav'>
            <div>
                <img src={logo} alt="logo" onClick={()=>history('/')}/>
            </div>
            <div onClick={()=>history(`/customer-${goto}`)}>
                Go to {props.goto} <i class="fa-sharp fa-solid fa-arrow-right"  ></i>
            </div>
        </div>
    )
}
export default CustomerNavbar;