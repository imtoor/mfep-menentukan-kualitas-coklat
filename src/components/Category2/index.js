import React from 'react'
import {Link} from 'react-router-dom'
import catimg from '../../images/category/icon-1.png'
import catimg2 from '../../images/category/icon-2.png'
import catimg3 from '../../images/category/icon-3.png'


const Category2 = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <section className={`category-area-s2 section-padding ${props.StyleClass}`}>
            <div className="container">
                <div className="category-wrap">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-12">
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src={catimg} alt=""/>
                                </div>
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} to="/shop">Queen Bee Honey</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing industry has been the industry's
                                        standard eos fugit industry's standard consectetur ipsum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-12">
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src={catimg2} alt=""/>
                                </div>
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} to="/shop">Sunflower Honey</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing industry has been the industry's
                                        standard eos fugit industry's standard consectetur ipsum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-12">
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src={catimg3} alt=""/>
                                </div>
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} to="/shop">Manuka Honey</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing industry has been the industry's
                                        standard eos fugit industry's standard consectetur ipsum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category2;