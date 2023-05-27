import React, { Fragment} from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {totalPrice} from "../../utils";
import {
  removeFromCartOnCartPage,
  incrementQuantity,
  decrementQuantity,
  cartUpdated
} from "../../store/actions/action";
import { toast } from "react-toastify";

const CartPage = (props) => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const checkCarts = () => {
    if (carts.length > 0) {
      
      window.scrollTo(10, 0);
      if(window.localStorage.getItem('isLogin') === '1') { 
        window.location = '/checkout';
      } else {
        toast.error('Kamu belum login');
        setTimeout(() => {
          window.location = '/login';
        }, 2000);
      }

    } else {
      toast.error('Barang belum dipilih!');
      setTimeout(() => {
        window.location = '/shop';
      }, 2000);
    }    
  }

  const { carts } = props;
  
  if (carts.length == 0) {
    setTimeout(() => {
      window.location = '/shop';
    }, 2000);
  }

  return (
    <Fragment>
      <Navbar hClass={"header-style-2"} />
      <PageTitle pageTitle={"Cart"} pagesub={"Cart"} />
      <div className="cart-area section-padding">
        <div className="container">
          <div className="form">
            <div className="cart-wrapper">
              <div className="row">
                <div className="col-12">
                  <form action="cart">
                    <table className="table-responsive cart-wrap">
                      <thead>
                        <tr>
                          <th className="images images-b">Gambar</th>
                          <th className="product-2">Nama Produk</th>
                          <th className="pr">Kuantiti</th>
                          <th className="ptice">Harga</th>
                          <th className="stock">Total Harga</th>
                          <th className="remove remove-b">Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {carts &&
                          carts.length > 0 &&
                          carts.map((cartItem, crt) => (
                            <tr key={crt}>
                              <td className="images">
                                <img src={cartItem.proImg} alt="" />
                              </td>
                              <td className="product">
                                <ul>
                                  <li className="first-cart">
                                    <b>{cartItem.title}</b>
                                  </li>
                                  <li>Tekstur : {cartItem.tekstur}</li>
                                  <li>Kadar Air : {cartItem.kadarAir}</li>
                                  <li>Aroma : {cartItem.aroma}</li>
                                </ul>
                              </td>
                              <td className="stock">
                                <div className="pro-single-btn">
                                  <Grid className="quantity cart-plus-minus">
                                    <Button
                                      className="dec qtybutton"
                                      onClick={() =>
                                        props.decrementQuantity(cartItem.id)
                                      }
                                    >
                                      -
                                    </Button>
                                    <input value={cartItem.qty} type="text" />
                                    <Button
                                      className="inc qtybutton"
                                      onClick={() =>
                                        props.incrementQuantity(cartItem.id)
                                      }
                                    >
                                      +
                                    </Button>
                                  </Grid>
                                </div>
                              </td>
                              <td className="ptice">Rp{new Intl.NumberFormat().format(cartItem.price)}</td>
                              <td className="stock">Rp{new Intl.NumberFormat().format(cartItem.qty * cartItem.price)}</td>
                              <td className="action">
                                <ul>
                                  <li
                                    className="w-btn"
                                    onClick={() => {
                                        props.removeFromCartOnCartPage(cartItem.id);
                                      }
                                    }
                                  >
                                    <i className="fi flaticon-delete"></i>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </form>
                  <div className="submit-btn-area">
                    <ul>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          className="theme-btn"
                          to="/shop"
                        >
                          Lanjutkan Belanja{" "}
                          <i className="fa fa-angle-double-right"></i>
                        </Link>
                      </li>
                      <li>
                        <button onClick={props.cartUpdated} type="submit">Update Keranjang</button>
                      </li>
                    </ul>
                  </div>
                  <div className="cart-product-list">
                    <ul>
                      <li>
                        Total produk<span>( {carts.length} )</span>
                      </li>
                      <li>
                        Sub Harga<span>Rp{new Intl.NumberFormat().format(totalPrice(carts))}</span>
                      </li>
                      <li className="cart-b">
                        Total Harga<span>Rp{new Intl.NumberFormat().format(totalPrice(carts))}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="submit-btn-area">
                    <ul>
                      <li>
                        <Link
                          onClick={checkCarts}
                          className="theme-btn"
                          to="#"
                        >
                          Proses ke Checkout{" "}
                          <i className="fa fa-angle-double-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};
export default connect(mapStateToProps, {
  removeFromCartOnCartPage,
  incrementQuantity,
  decrementQuantity,
  cartUpdated
})(CartPage);
