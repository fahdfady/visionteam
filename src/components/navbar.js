import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'

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
            </nav>

        </header>
    );
}

export default Navbar;