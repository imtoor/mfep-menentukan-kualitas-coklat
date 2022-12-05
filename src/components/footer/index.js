import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/logo.png'


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
                                <Link onClick={ClickHandler} to="/"><img src={Logo} alt="ft-logo"/> Annahl</Link>
                            </div>
                            <p>Management consulting includes a broad range of activities, and the many firms and
                                their members often define these practices.</p>
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
                        <div className="widget tp-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-pin"></i>7 Green Lake Street Crawfordsville, IN 47933
                                    </li>
                                    <li><i className="fi flaticon-call"></i>+1 800 123 456 789</li>
                                    <li><i className="fi flaticon-envelope"></i>Annahl@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>My Account</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/project">Our Projects</Link></li>
                                <li><Link onClick={ClickHandler} to="/shop">Our Shop</Link></li>
                                <li><Link onClick={ClickHandler} to="/wishlist">Wishlist</Link></li>
                                <li><Link onClick={ClickHandler} to="/checkout">Checkout</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget newsletter-widget">
                            <div className="widget-title">
                                <h3>Newsletter</h3>
                            </div>
                            <p>You will be notified when somthing new will be appear.</p>
                            <form>
                                <div className="input-1">
                                    <input type="email" className="form-control" placeholder="Email Address *" required/>
                                </div>
                                <div className="submit clearfix">
                                    <button type="submit"><i className="ti-email"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div className="tp-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> Copyright &copy; 2021 Annahl by <Link onClick={ClickHandler} to="/">themepresss</Link>.
                            All Rights Reserved.</p>
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