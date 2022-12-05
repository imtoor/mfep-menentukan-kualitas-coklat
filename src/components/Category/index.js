import React from 'react'
import {Link} from 'react-router-dom'
import catimg from '../../images/category/icon-1.png'
import catimg2 from '../../images/category/icon-2.png'
import catimg3 from '../../images/category/icon-3.png'
import catimg4 from '../../images/category/icon-4.png'
import catimg5 from '../../images/category/category.jpg'


const Category = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <section className="category-area section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="category-wrap">
                            <div className="category-title">
                                <h2>Our Honey Category</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, eos fugit officiis
                                    error ipsum, dolor ducimus nam ratione nulla deleniti inventore blanditiis.</p>
                            </div>
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src={catimg} alt="" />
                                </div>
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} to="/shop">Queen Bee Honey</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing industry has been the industry's standard eos fugit industry's standard consectetur ipsum.</p>
                                </div>
                            </div>
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src={catimg2} alt="" />
                                </div>
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} to="/shop">Sunflower Honey</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing industry has been the industry's standard eos fugit industry's standard consectetur ipsum.</p>
                                </div>
                            </div>
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src={catimg3} alt="" />
                                </div>
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} to="/shop">Manuka Honey</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing industry has been the industry's standard eos fugit industry's standard consectetur ipsum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="category-img">
                            <img src={catimg5} alt="" />
                            <div className="ct-img"><img src={catimg4} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;