import React, { Component } from 'react';
import Gallery_1 from '../../images/projects/img-6.jpg';
import Gallery_2 from '../../images/projects/img-7.jpg';
import Gallery_3 from '../../images/projects/img-8.jpg';
import Gallery_4 from '../../images/projects/img-9.jpg';
import Gallery_5 from '../../images/projects/img-10.jpg';
import Gallery_6 from '../../images/projects/img-11.jpg';
import Gallery_7 from '../../images/projects/img-1.jpg';
import Gallery_8 from '../../images/projects/img-2.jpg';
import Gallery_9 from '../../images/projects/img-3.jpg';
import {Link} from 'react-router-dom'

class Project extends Component {

    state = {
        Flower: false,
        Hill: false,
        Forest: false,
        Queen: false,
        isOpen : false,
    }

    render() {

        const allElement = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                Hill: true,
                Flower: true,
                Queen: true,
            });
        }

        const webDesign = event => {
            event.preventDefault();
            this.setState({
                Flower: true,
                Hill: false,
                onWebApp: false,
                Queen: false,
                isOpen: true,
            });
        }

        const printDesign = event => {
            event.preventDefault();
            this.setState({
                Hill: true,
                Flower: false,
                onWebApp: false,
                Queen: false,
                isOpen: true,
            });
        }

        const webApp = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                Hill: false,
                Flower: false,
                Queen: false,
                isOpen: true,
            });
        }

        const Photography = event => {
            event.preventDefault();
            this.setState({
                Queen: true,
                onWebApp: false,
                Hill: false,
                Flower: false,
                isOpen: true,
            });
        }


        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }



        return (

            <section id="protfolio" className="tp-projects section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="section-title mb-0">
                                <h2>Latest <span>Project</span></h2>
                            </div>
                            <div className="projects-menu">
                                <ul>
                                    <li><Link data-filter="*" to="/" className="current" onClick={allElement}>All Project</Link></li>
                                    <li><Link data-filter=".Web-Design" to="/" onClick={webDesign}>Flower</Link></li>
                                    <li><Link data-filter=".Print-Design" to="/" onClick={printDesign}>Hill</Link></li>
                                    <li><Link data-filter=".Web-Application" to="/" onClick={webApp}>Forest</Link></li>               
                                    <li><Link data-filter=".Photography" to="/" onClick={Photography}>Queen</Link></li> 
                                </ul>
                            </div>
                            <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary">
                               
                                <div className={this.state.Hill ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"
                                    }>
                                    <div className="project-inner">
                                        <img src={Gallery_1} className="img img-responsive" alt="" />
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} to="/project-single">fresh original honey</Link></h3>
                                                <p className="cat">healthy food</p>
                                            </div>
                                        </div>
                                    </div>      
                                </div>
                                <div className={this.state.Flower ? "grid active" : "grid" 
                                    && this.state.Hill ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.Queen ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src={Gallery_2} alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} to="/project-single">fresh original honey</Link></h3>
                                                <p className="cat">healthy food</p>
                                            </div>
                                        </div>
                                    </div> 
                                        
                                </div>
                                <div className={this.state.Forest ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src={Gallery_6} alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} to="/project-single">fresh original honey</Link></h3>
                                                <p className="cat">healthy food</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className={this.state.Hill ? "grid active" : "grid"
                                    && this.state.Queen ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src={Gallery_5} alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} to="/project-single">fresh original honey</Link></h3>
                                                <p className="cat">healthy food</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className={this.state.Hill ? "grid active" : "grid"
                                    && this.state.Queen ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src={Gallery_3} alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} to="/project-single">fresh original honey</Link></h3>
                                                <p className="cat">healthy food</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className={this.state.Hill ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.Queen ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src={Gallery_4} alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} to="/project-single">fresh original honey</Link></h3>
                                                <p className="cat">healthy food</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className={this.state.Hill ? "grid active" : "grid"
                                    && this.state.Queen ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src={Gallery_7} alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} to="/project-single">fresh original honey</Link></h3>
                                                <p className="cat">healthy food</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className={this.state.Flower ? "grid active" : "grid"
                                    && this.state.Queen ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src={Gallery_8} alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} to="/project-single">fresh original honey</Link></h3>
                                                <p className="cat">healthy food</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className={this.state.Flower ? "grid active" : "grid"
                                    && this.state.Queen ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src={Gallery_9} alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} to="/project-single">fresh original honey</Link></h3>
                                                <p className="cat">healthy food</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="view-btn">
                        <Link  onClick={ClickHandler} className="theme-btn" to="/project">View All <i className="fa fa-angle-double-right"></i></Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Project;