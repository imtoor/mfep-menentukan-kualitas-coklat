import React, { Component } from "react";
import { connect } from "react-redux";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import MobileMenu from "../../components/MobileMenu";
import min3 from "../../images/shop/mini-cart/bee2.png";
import {totalPrice} from "../../utils";
import { removeFromCart,removeFromWishList } from "../../store/actions/action";
class Header extends Component {
  state = {
    isCartShow: false,
    isWishlistShow: false,
  };

  cartHandler = () => {
    this.setState({
      isCartShow: !this.state.isCartShow,
    });
  };

  wishlistHandler = () => {
    this.setState({
      isWishlistShow: !this.state.isWishlistShow,
    });
  };
  profileHandler = () => {
    this.setState({
      isprofileShow: !this.state.isprofileShow,
    });
  };

  
  render() {
    const { isCartShow, isWishlistShow, isprofileShow } = this.state;
    
    const ClickHandler = () =>{
      window.scrollTo(10, 0);
   }

    const { carts } = this.props;
    const { wishs } = this.props;


    let totalwishlistprice = 0;
    if (wishs && wishs.length > 0) {
      for (let i = 1; i <= wishs.length; i++) {
        totalwishlistprice += Number(wishs[i-1].price);
      }
    }

    return (
      <header id="header" className={`site-header ${this.props.hClass}`}>
        <nav className="navigation navbar navbar-expand-lg">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="navbar-header">
                  <Link onClick={ClickHandler} className="navbar-brand" to="/home">
                    <img src={Logo} alt="icon" /> Annahl
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <Link onClick={ClickHandler} className="menu-close" to="/">
                    <i className="fi flaticon-cancel"></i>
                  </Link>
                  <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
                    <li>
                      <Link onClick={ClickHandler} className="active" to="/">
                        Home
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/home">Home Style 1</Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/home2">Home Style 2</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/about">About</Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/shop">Shop</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/cart">Pages</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/cart">Cart</Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/wishlist">Wishlist</Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/checkout">Checkout</Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/404">404 Error</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link onClick={ClickHandler} to="/">Product</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link onClick={ClickHandler} to="/shop">Product</Link>
                            </li>
                            <li>
                              <Link onClick={ClickHandler} to="/product-single/1">Product Single</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link onClick={ClickHandler} to="/">Project</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link onClick={ClickHandler} to="/project">Project</Link>
                            </li>
                            <li>
                              <Link onClick={ClickHandler} to="/project-single">Project Single</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/login">Login</Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/register">Register</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">Blog</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/blog">Blog right sidebar</Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/blog-left-sidebar">Blog left sidebar</Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/blog-fullwidth">Blog fullwidth</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link onClick={ClickHandler} to="/">Blog details</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link onClick={ClickHandler} to="/blog-single/1">
                                Blog details right sidebar
                              </Link>
                            </li>
                            <li>
                              <Link onClick={ClickHandler} to="/blog-single-left-sidebar/1">
                                Blog details left sidebar
                              </Link>
                            </li>
                            <li>
                              <Link onClick={ClickHandler} to="/blog-single-fullwidth/1">
                                Blog details fullwidth
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="header-right d-flex">
                  <div className="header-profile-form-wrapper">
                    <button
                      onClick={this.profileHandler}
                      className="profile-toggle-btn"
                    >
                      <i className={`${isprofileShow ? 'fi ti-close' : 'fi flaticon-user'}`}></i>
                    </button>
                    <div
                      className={`header-profile-content ${
                        isprofileShow ? "header-profile-content-toggle" : ""
                      }`}
                    >
                      <ul>
                        <li>
                          <Link onClick={ClickHandler} to="/login">Login</Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/register">Register</Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/cart">Cart</Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/wishlist">Wishlist</Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/checkout">Checkout</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mini-cart">
                    <button
                      onClick={this.cartHandler}
                      className="cart-toggle-btn"
                    >
                      {" "}
                      <i className="fi flaticon-bag"></i>{" "}
                      <span className="cart-count">{carts.length}</span>
                    </button>
                    <div
                      className={`mini-cart-content ${
                        isCartShow ? "mini-cart-content-toggle" : ""
                      }`}
                    >
                      <button
                        onClick={this.cartHandler}
                        className="mini-cart-close"
                      >
                        <i className="ti-close"></i>
                      </button>
                      <div className="mini-cart-items">
                        {carts &&
                          carts.length > 0 &&
                          carts.map((cart, crt) => (
                            <div className="mini-cart-item clearfix" key={crt}>
                              <div className="mini-cart-item-image">
                                <span>
                                  <img src={cart.proImg} alt="icon" />
                                </span>
                              </div>
                              <div className="mini-cart-item-des">
                                <p>{cart.title} </p>
                                <span className="mini-cart-item-price">
                                  ${cart.price} x {" "} {cart.qty}
                                </span>
                                <span className="mini-cart-item-quantity">
                                    <button
                                      onClick={() =>
                                        this.props.removeFromCart(cart.id)
                                      }
                                      className="btn btn-sm btn-danger"
                                    >
                                      <i className="ti-close"></i>
                                    </button>{" "}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="mini-cart-action clearfix">
                        <span className="mini-checkout-price">
                          Total: ${totalPrice(carts)}
                        </span>
                        <div className="mini-btn">
                          <Link onClick={ClickHandler} to="/checkout" className="view-cart-btn s1">
                            Checkout
                          </Link>
                          <Link onClick={ClickHandler} to="/cart" className="view-cart-btn">
                            View Cart
                          </Link>
                        </div>
                      </div>
                      <div className="visible-icon">
                        <img src={min3} alt="icon" />
                      </div>
                    </div>
                  </div>
                  <div className="header-wishlist-form-wrapper">
                    <button
                      onClick={this.wishlistHandler}
                      className="wishlist-toggle-btn"
                    >
                      <i className="fi flaticon-heart"></i>{" "}
                      <span className="cart-count">{wishs.length}</span>{" "}
                    </button>
                    <div
                      className={`mini-wislist-content ${
                        isWishlistShow ? "mini-cart-content-toggle" : ""
                      }`}
                    >
                      <button
                        onClick={this.wishlistHandler}
                        className="mini-cart-close"
                      >
                        <i className="ti-close"></i>
                      </button>
                      <div className="mini-cart-items">
                      {wishs &&
                          wishs.length > 0 &&
                          wishs.map((wish, i) => (
                            <div className="mini-cart-item clearfix" key={i}>
                              <div className="mini-cart-item-image">
                                <span>
                                  <img src={wish.proImg} alt="icon" />
                                </span>
                              </div>
                              <div className="mini-cart-item-des">
                                <p>{wish.title} </p>
                                <span className="mini-cart-item-price">
                                  ${wish.price}
                                </span>
                                <span className="mini-cart-item-quantity">
                                  <button
                                    onClick={() =>
                                      this.props.removeFromWishList(wish.id)
                                    }
                                    className="btn btn-sm btn-danger"
                                  >
                                    <i className="ti-close"></i>
                                  </button>{" "}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="mini-cart-action clearfix">
                        <span className="mini-checkout-price">
                          Total: ${totalwishlistprice}
                        </span>
                        <div className="mini-btn">
                          <Link onClick={ClickHandler} to="/checkout" className="view-cart-btn s1">
                            Checkout
                          </Link>
                          <Link onClick={ClickHandler} to="/wishlist" className="view-cart-btn">
                            View Wishlist
                          </Link>
                        </div>
                      </div>
                      <div className="visible-icon">
                        <img src={min3} alt="icon" />
                      </div>
                    </div>
                  </div>
                  <MobileMenu />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
    wishs: state.wishList.w_list,
  };
};


export default connect(mapStateToProps, { removeFromCart,removeFromWishList })(Header);
