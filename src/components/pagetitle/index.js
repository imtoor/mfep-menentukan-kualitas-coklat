import React from 'react'
import { Link } from 'react-router-dom'
import shape1 from '../../images/slider/img-2.png'
import shape2 from '../../images/slider/img-3.png'

const PageTitle = (props) => {
    return(
        <div className="tp-breadcumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><span>{props.pagesub}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-shape-img-1"><img src={shape1} alt=""/></div>
            <div className="hero-shape-img-2"><img src={shape2} alt=""/></div>
        </div>
    )
}

export default PageTitle;