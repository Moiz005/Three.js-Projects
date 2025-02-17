import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../index.css'


function Hero() {
    return(
        <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade" data-aos-delay="1500">
        <div className="container">
            <div className="row justify-content-center">
            <div className="dance-body col-lg-6 text-center ">
            <h2><span>TIMESERIES FORECASTING DASHBOARD</span></h2>
            <p>An Intelligent Solution for Interactive Time Series Forecasting</p>
            </div>
            </div>
        </div>
        <div id="graphResult" className="graph-result"></div>
        <div id="chart"></div>
        <div id="graphViz"></div>
        </section>
    );
}

export default Hero
