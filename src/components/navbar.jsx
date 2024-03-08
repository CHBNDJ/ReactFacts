import Logo from '../assets/react.svg';
import './style.css';

function Navbar() {
    return (
        <nav className="navbar">
            <img src={Logo} alt="React Logo" width="50px" />
            <h1 className="navtitle">ReactFacts</h1>
            <p className="navtext">React Course - Project 1</p>
        </nav>
    );
}

export default Navbar;
