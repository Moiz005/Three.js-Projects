import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../index.css'

function Navbar() {
    return(
        <header id="header" className="glass-header d-flex align-items-center fixed-top">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center  me-auto me-lg-0">
                        <h1>SmartViz</h1>
                    </a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                                <li className="dropdown">Models
                                    <div className="glass">
                                        <p>ARIMA</p>
                                        <p>ANN</p>
                                        <p>SARIMA</p>
                                        <p>ETS</p>
                                        <p>PROPHET</p>
                                        <p>SVR</p>
                                        <p>LSTM</p>
                                        <p>HYBRID MODEL</p>
                                    </div>
                                </li>
                        </ul>
                    </nav>
                    <div class="header-social-links">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

            </div>
        </header>
    );
}

export default Navbar
