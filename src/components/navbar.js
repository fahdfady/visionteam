import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'

function showNav() {
    var x = document.querySelector("ul.links");
    if (x.style.opacity === "1") {
        x.style.opacity = "0";
    } else {
        x.style.opacity = "1";
    }
}
const Navbar = () => {

    return (
        <header className="page-header">
            <nav>

                <div className="logo">
                    <Link to="/">
                        <img src={ logo } alt="Vision Team" />
                    </Link>
                </div>

                <ul className="links">
                    <li className="home">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="about">
                        <Link to="/about">about vision</Link>
                    </li>

                    <li className="teams">
                        <Link to="/teams">Teams</Link>
                    </li>
                    <li className="careers">
                        <Link to="/careers">Careers</Link>
                    </li>
                </ul>

                <a href="#0" className="hamburger-button" onClick={ showNav }>
                    <i className="fa fa-bars"></i>
                </a>

            </nav>

        </header>
    );
}

export default Navbar;