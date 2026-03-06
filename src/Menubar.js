import "./css/Menubar.css"
import { NavLink } from 'react-router-dom';

const MenuBar = () => {
    return(
        <div className="nav">
            <ul>
                <li><NavLink to="/about">About me</NavLink></li>
                <li><NavLink to="/formations">Formations</NavLink></li>
                <li><NavLink to="/skills">Skills</NavLink></li>
                <li><NavLink to="/experiences">Experiences</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>

            </ul>
        </div>
    );
}

export default MenuBar ;