import { Link } from "react-router-dom";

const NavigationBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    MyReactApp
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/randomColor">Random Color</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/lightDarkMode">Light & Dark Mode</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/autoCompleteSearch">AutoComplete Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/qrScannerCode">QR Scanner</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/scrollIndector">Scroll Indicator</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}

export default NavigationBar