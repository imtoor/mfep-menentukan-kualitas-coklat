import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from '../../images/client/img-1.png'
import client2 from '../../images/client/img-2.png'
import client3 from '../../images/client/img-3.png'
import client4 from '../../images/client/img-4.png'
import client5 from '../../images/client/img-5.png'



class Client extends Component {
    render() {
      var settings = {
        dots: false,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };
      return (
        <section className="client-area">
            <div className="container">
                <h2 className="hidden">client</h2>
                <div className="client-item">
                    <div className="client-carousel">
                        <Slider {...settings}>
                            <img src={client1} alt="clinet"/>
                            <img src={client2} alt="clinet"/>
                            <img src={client3} alt="clinet"/>
                            <img src={client4} alt="clinet"/>
                            <img src={client5} alt="clinet"/>
                            <img src={client1} alt="clinet"/>
                            <img src={client2} alt="clinet"/>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
      );
    }
  }

export default Client;