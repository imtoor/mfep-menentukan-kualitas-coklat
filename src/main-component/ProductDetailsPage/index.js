import React, {Fragment, useEffect, useState} from 'react';
import Navbar from '../../components/Navbar'
import ProductSingleSec from '../../components/ProductSingleSec'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import { connect } from "react-redux";
import api from "../../api";
import { addToCart } from "../../store/actions/action";


const ProductDetailsPage =(props) => {

    const productsArray = api();
    const Allproduct = productsArray

    const {addToCart} = props;
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(Allproduct.filter(product => product.id === Number(props.match.params.id)))
    }, []);

    const item = product[0];

    return(
        <Fragment>
            <Navbar hClass={'header-style-2'}/>
            <PageTitle pageTitle={'Product Single'} pagesub={'Product'}/> 
            {item ? <ProductSingleSec
                item={item}
                addToCart={addToCart}
            /> : null}
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        products: state.data.products,
    }
};

export default connect(mapStateToProps, {addToCart})(ProductDetailsPage);
