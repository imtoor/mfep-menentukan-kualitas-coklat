import React from 'react'
import {Link} from 'react-router-dom'
import VideoModal from '../ModalVideo'
import abimg from '../../images/abou3.jpg'


const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <section className="about-section section-padding p-t-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-lg-5 col-12">
                        <div className="video-area">
                            <img src={abimg} alt="" />
                            <div className="video-holder">
                                <VideoModal/>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-7 col-12">
                        <div className="about-area">
                            <div className="about-wrap">
                                <div className="about-title">
                                    <small>Tentang Coklatku</small>
                                    <h2>Semua parameter kualitas coklat <span>terbaik</span> ada disini</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint placeat consectetur
                                    sapiente tempore nobis iure quos neque laboriosam, doloribus labore ad assumenda
                                    veritatis asperiores possimus, tenetur id dolorum minus ipsa, quam eligendi odit
                                    accusamus necessitatibus. Dicta aut delectus minima atque illo hic, totam deleniti
                                    magni nam, ex perferendis, excepturi impedit voluptates ipsam.</p>
                                <Link onClick={ClickHandler} to="/about" className="btn theme-btn" >Baca Selanjutnya<i className="fa fa-angle-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;