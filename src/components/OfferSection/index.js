import React from 'react'
import {Link} from 'react-router-dom'
import abimg from '../../images/honey.png'

const OfferSection = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <section className="offer-area section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="offer-img">
                           <img src={abimg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="offer-wrap">
                            <div className="offer-title">
                                <small>Limited Offer For Customer</small>
                                <h2>Fresh Sunflower <span>Orginal Honey Up</span> <br/> To 58% Off.</h2>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, eos fugit officiis
                                error ipsum, dolor ducimus nam ratione nulla deleniti inventore blanditiis lorem inorci
                                sed vestibulum tempus.</p>
                            <Link onClick={ClickHandler} to="/shop" className="btn theme-btn">Shop Now <i className="fa fa-angle-double-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfferSection;