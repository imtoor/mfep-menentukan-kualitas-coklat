import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/cocoa-bean.png'


const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="tp-site-footer">
        <div className="tp-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <Link onClick={ClickHandler} to="/"><img src={Logo} alt="ft-logo"/> Coklatku</Link>
                            </div>
                            <p>Coklatku adalah toko coklat online langsung dari pertanian.</p>
                            <ul>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-twitter-alt"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-google"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            
                        </div>
                    </div>                    
                    <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="widget tp-service-link-widget">
                            <div className="widget-title">
                                <h3>Kontak </h3>
                            </div>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-pin"></i>7 Green Lake Street Crawfordsville, IN 47933
                                    </li>
                                    <li><i className="fi flaticon-call"></i>+62 831-3929-2954</li>
                                    <li><i className="fi flaticon-envelope"></i>coklatku@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div className="tp-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> Copyright&copy; 2023 Coklatku by Ashar.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-shape1">
            <i className="fi flaticon-honeycomb"></i>
        </div>
        <div className="footer-shape2">
            <i className="fi flaticon-honey-1"></i>
        </div>
    </footer>
  )
} 

export default Footer;