import React from 'react'
import serviceimg from '../../images/support/1.png'
import serviceimg2 from '../../images/support/2.png'
import serviceimg3 from '../../images/support/3.png'


const Service = (props) => {
    return(
        <div className="service-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="service-item">
                            <div className="service-icon">
                                <span><img draggable="false" src={serviceimg} alt=""/></span>
                            </div>
                            <div className="service-icon-text">
                                <h2>Pengiriman Cepat</h2>
                                <span>Ke Seluruh Indonesia</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="service-item">
                            <div className="service-icon">
                                <span><img draggable="false" src={serviceimg2} alt=""/></span>
                            </div>
                            <div className="service-icon-text">
                                <h2>Pembayaran Mudah</h2>
                                <span>100% Keamanan Pembayaran</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="service-item">
                            <div className="service-icon">
                                <span><img draggable="false" src={serviceimg3} alt=""/></span>
                            </div>
                            <div className="service-icon-text">
                                <h2>20/07 Support</h2>
                                <span>Support Kendala Kapanpun, Dimanapun</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;