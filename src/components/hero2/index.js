import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from '../../images/slider/slide-cocoa-1.jpg'
import slide2 from '../../images/slider/slide-cocoa-2.jpg'
import hero3 from '../../images/slider/slide-cocoa-1.jpg'



class Hero2 extends Component {
    render() {

        var settings = {
            dots: true,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        return (
            <section className="hero hero-style-2">
                <div className="hero-slider">
                    <Slider {...settings}>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${slide1})` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col col-lg-6 slide-caption">
                                            <div className="slide-title">
                                                <h2><span>Coklat</span> <span>Segar</span> <span>Organik</span></h2>
                                            </div>
                                            <div className="btns">
                                                <Link to="/shop" className="btn theme-btn">Beli Sekarang <i className="fa fa-angle-double-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${slide2})` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col col-lg-6 slide-caption">
                                            <div className="slide-title">
                                                <h2><span>Coklat</span> <span>Segar</span> <span>Organik</span></h2>
                                            </div>
                                            <div className="btns">
                                                <Link to="/shop" className="btn theme-btn">Beli Sekarang <i className="fa fa-angle-double-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        )
    }
}

export default Hero2;