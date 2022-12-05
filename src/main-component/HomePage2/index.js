import React, {Fragment} from 'react';
import { connect } from "react-redux";
import Navbar from '../../components/Navbar'
import Hero2 from '../../components/hero2'
import Category2 from '../../components/Category2'
import About from '../../components/about'
import Product from '../../components/Product'
import OfferSection from '../../components/OfferSection'
import FlashSale from '../../components/FlashSale'
import Project from '../../components/Project'
import Service from '../../components/Service'
import Testimonial from '../../components/Testimonial'
import Client from '../../components/Client'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import { addToCart,addToWishList } from "../../store/actions/action";
import api from "../../api";

const HomePage2 =({ addToCart,addToWishList }) => {

    const productsArray = api();

    const addToCartProduct = (product) => {
        addToCart(product);
    };

    const addToWishListProduct = (product) => {
        addToWishList(product);
    };


    const products = productsArray

    return(
        <Fragment>
            <Navbar hClass={'header-style-2'}/>
            <Hero2/>
            <Category2/>
            <About/>
            <Product
                addToCartProduct={addToCartProduct}
                addToWishListProduct={addToWishListProduct}
                products={products}
            />
            <OfferSection/>
            <FlashSale
                addToCartProduct={addToCartProduct}
                addToWishListProduct={addToWishListProduct}
                products={products}
            />
            <Project/>
            <Service/>
            <Testimonial/>
            <Client/>
            <BlogSection/>
            <Footer/> 
            <Scrollbar/>
        </Fragment>
    )
};
export default connect(null, { addToCart,addToWishList })(HomePage2);