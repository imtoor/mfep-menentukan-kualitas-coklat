import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import FilterSidebar from "../../components/FilterSidebar";
import FilterAllProduct from "../../components/FilterAllProduct";
import api from "../../api";
import { addToCart, addToWishList } from "../../store/actions/action";
import { evaluation, weightedEvaluation, totalWeightEvaluation } from "../../js/mfep";

const ShopPage = ({ addToCart, addToWishList }) => {

    // const productsArray = api()

  const apiUrl = process.env.REACT_APP_MODE === 'prod' ? process.env.REACT_APP_PROD_API_ENDPOINT + process.env.REACT_APP_GET_PRODUCTS:process.env.REACT_APP_DEV_API_ENDPOINT + process.env.REACT_APP_GET_PRODUCTS
  
  const [productsArray, setProductsArray] = useState([])

  const getProducts = async() => {

    const request = await fetch(apiUrl)
    const response = await request.json()

    let baseUrl = undefined

    if (process.env.REACT_APP_MODE === 'dev') {
      baseUrl = process.env.REACT_APP_DEV_BASE_URL + 'img/products/'
    } else {
      baseUrl = process.env.REACT_APP_PROD_BASE_URL + 'img/products/'
    }

    response.data.forEach((item) => {
      

      setProductsArray(productsArray => [{
        "id": item.id,
        "proImg": baseUrl + item.gambar,
        "offer": "",
        "title": item.nama,
        "price": item.harga,
        "delPrice": "",
        "link": "/product-single",
        "size": "small",
        "color": "000",
        "stok": item.stok,
        "tekstur": item.tekstur,
        "kadarAir": item.kadar_air,
        "aroma": item.aroma,
        "satuan": item.satuan,
      }, ...productsArray])
      
    })
  }

  useEffect(() => {

    getProducts()    

  }, [])

  const [filter, setFilter] = useState({
    price: "",
    tekstur: "",
    kadarAir: "",
    aroma: "",
  });

  const priceChangeHandler = ({ target: { name, value } }) => {
    const val = typeof value === "string" ? JSON.parse(value) : value;
    setFilter({ ...filter, [name]: val });
  };

  const changeHandler = ({ target: { name, value } }) => {
    setFilter({ ...filter, [name]: value });
  };

  const priceFIlter = (price) => {
    if (filter.price === "") {
      return true;
    } else if (filter.price.max && filter.price.min) {
      return price <= filter.price.max && price >= filter.price.min;
    } else if (filter.price.min) {
      return price >= filter.price.min;
    } else {
      return false;
    }
  };

  const addToCartProduct = (product) => {
    addToCart(product, 1, filter.kadarAir, filter.tekstur, filter.aroma);
  };

  const products = productsArray
    .filter((el) => priceFIlter(el.price))
    .filter((el) => (filter.tekstur ? el.tekstur === filter.tekstur : true))
    .filter((el) => (filter.kadarAir ? el.kadarAir === filter.kadarAir : true))
    .filter((el) => (filter.aroma ? el.aroma === filter.aroma : true));

  const addToWishListProduct = (products) => {
    addToWishList(products);
  };

  return (
    <Fragment>
      <Navbar hClass={"header-style-2"} />
      <PageTitle pageTitle={"Shop"} pagesub={"Shop"} />
      <div className="shop-section">
        <div className="container">
          <div className="row">
            <FilterSidebar
              filter={filter}
              priceChangeHandler={priceChangeHandler}
              changeHandler={changeHandler}
            />
            <FilterAllProduct
              addToCartProduct={addToCartProduct}
              addToWishListProduct={addToWishListProduct}
              products={products}
            />
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default connect(null, { addToCart, addToWishList })(ShopPage);
