import React, { Component } from "react";
import { Link } from 'react-router-dom'

import hero2 from '../../images/slider/img-1.png'
import hero3 from '../../images/slider/img-2.png'
import hero4 from '../../images/slider/img-3.png'




class Hero extends Component {
    render() {

        return (
            <section className="hero hero-style-1">
                <div className="hero-slider">
                    <div className="slide">
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-5 slide-caption">
                                    <div className="slide-title">
                                        <h2><span>Fresh</span> Organic <span>Honey</span></h2>
                                    </div>
                                    <div className="btns">
                                        <Link to="/shop" className="btn theme-btn">Shop Now <i className="fa fa-angle-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-image">
                            <div className="simg-1"><img src={hero2} alt="slide-img"/></div>
                            <div className="simg-2"><img src={hero3} alt="slide-img"/></div>
                        </div>
                        <div className="hero-shape-img"><img src={hero4} alt="slide-img"/></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;