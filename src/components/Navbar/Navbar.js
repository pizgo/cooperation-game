import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <nav className="navbar bg-white navbar-expand-lg">
                <div className="container">
                    <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </button>
                    <div className="navbar-container collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNav">
                        <ul className="navbar-nav menu">
                            <li className="nav-item active">
                                <Link className="nav-link nav-link-color" aria-current="page" to="/login">
                                    Zaloguj się
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/registration">
                                    Zarejestruj się
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;