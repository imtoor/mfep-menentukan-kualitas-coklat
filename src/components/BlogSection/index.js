import React from 'react'
import blogs from '../../api/blogs'
import {Link} from 'react-router-dom'

const BlogSection = (props) => {
    
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="blog-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-title">
                            <h2>News And <span>Blog</span></h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the
                                industry's standard consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="blog-wrap">
                    <div className="row align-items-center">
                        {blogs.map((blog, Bitem) => (
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" key={Bitem}>
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <img src={blog.screens} alt=""/>
                                    </div>
                                    <div className="blog-content">
                                        <ul>
                                            <li><i className="ti-calendar"></i> {blog.create_at}</li>
                                            <li><i className="ti-heart"></i> {blog.comment}  Million</li>
                                        </ul>
                                        <h3><Link onClick={ClickHandler} to={`/blog-single/${blog.id}`}>{blog.title}</Link></h3>
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.id}`} className="btn theme-btn-s2">Read more<i
                                                className="fa fa-angle-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection;