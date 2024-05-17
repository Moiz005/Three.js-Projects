import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import React, { useEffect } from 'react';
import Loader from './Loader'
import '../index.css'


function Footer() {
    return(
        <>
            
            <footer id="footer" class="footer">
                <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>SmartViz</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://bootstrapmade.com/">Hammad Javaid</a>
                </div>
                </div>
            </footer>

            <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

            <div id="preloader">
                <div class="line"></div>
            </div>

            <Loader />
        </>
    );
}

export default Footer
