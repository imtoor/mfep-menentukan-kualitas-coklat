import React, { useState } from "react";
import { Link } from "react-router-dom";
import DefaultModal from "../../components/Modal";
import Offer from '../../components/countdown'

const FlashSale = ({ products, addToCartProduct,addToWishListProduct }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
      };
    
      const [open, setOpen] = React.useState(false);
    
      function handleClose() {
        setOpen(false);
      }
    
      const [state, setState] = useState({});
    
      const handleClickOpen = (item) => {
        setOpen(true);
        setState(item);
      };

    return(
        <section className="flash-Sale-area product-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-title">
                            <h2>Flash <span>Sale</span> Items</h2>
                             <Offer/>
                        </div>
                    </div>
                </div>
                <div className="product-wrap">
                    <div className="row align-items-center">
                        {products.length > 0 &&
                        products.slice(0,4).map((product, pitem) => (
                            <div
                            className="col-lg-3 col-md-6 col-sm-12 col-12"
                            key={pitem}
                            >
                            <div className="product-item">
                                <div className="product-img">
                                <img src={product.proImg} alt="" />
                                <ul>
                                    <li>
                                    <button
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Add to Cart"
                                        onClick={() => addToCartProduct(product)}
                                    >
                                        <i className="fi flaticon-shopping-cart"></i>
                                    </button>
                                    </li>
                                    <li>
                                        <button
                                            data-bs-toggle="tooltip"
                                            data-bs-html="true"
                                            title="Quick View"
                                            onClick={() => handleClickOpen(product)}
                                        >
                                            <i className="fi ti-eye"></i>
                                        </button>
                                    </li>
                                    <li>
                                    <button
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Add to Wishlist"
                                        onClick={() => addToWishListProduct(product)}
                                    >
                                        <i className="fi flaticon-like"></i>
                                    </button>
                                    </li>
                                </ul>
                                <div className="offer-thumb">
                                    <span>{product.offer}</span>
                                </div>
                                </div>
                                <div className="product-content">
                                <h3>
                                    <Link
                                        onClick={ClickHandler}
                                        to={`/product-single/${product.id}`}
                                        >
                                        {product.title}
                                    </Link>
                                </h3>
                                <div className="product-btm">
                                    <div className="product-price">
                                    <ul>
                                        <li>${product.price}</li>
                                        <li>${product.delPrice}</li>
                                    </ul>
                                    </div>
                                    <div className="product-ratting">
                                    <ul>
                                        <li>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <DefaultModal
                addToCartProduct={addToCartProduct}
                open={open}
                onClose={handleClose}
                product={state}
            />
        </section>
    )
}

export default FlashSale;