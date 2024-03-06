import { FaUser } from "react-icons/fa";
import './Header.scss';

function Header(){
    return (
        <div className="header_container">   
                <h1><a href="/home">CaféTop</a></h1>
                <a href="/cafe"><li>Cafés</li></a> 
                <a href="/user"><FaUser id="user_icon"/></a>
        </div>
    );
   }
   
   export default Header;