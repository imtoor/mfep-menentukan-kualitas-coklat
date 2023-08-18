
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import DefaultModal from "../Modal";
import { evaluation, weightedEvaluation, totalWeightEvaluation } from "../../js/mfep";

const ProductGrid = ({ products, addToCartProduct,addToWishListProduct }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  const [state, setState] = useState({});

  const handleClickOpen = (item) => {
    setOpen(true);
    setState(item);
  };

  let evaluationData = evaluation(products);
  let weightedEvaluationData = weightedEvaluation(evaluationData);
  let totalWeightEvaluationData = totalWeightEvaluation(weightedEvaluationData);

  products.map((item, index) => {
    if(item.title == totalWeightEvaluationData[index].title) {
      item.weightEvaluation = totalWeightEvaluationData[index].total;
    }
  })

  products.sort((totalWeightA, totalWeightB) => {
      return totalWeightB.weightEvaluation - totalWeightA.weightEvaluation;
  })


  return (

    <div className="product-wrap">
      <div className="row align-items-center">
  
        <p>Data coklat telah tersorting otomatis menggunakan Metode MFEP untuk memastikan kualitas coklat terbaik.
          Berikut adalah Factor Weight / Kriteria dan Bobot dari Metode MFEP yang digunakan dalam melakukan Sorting:
        </p>
        <table className="table table-striped text-center" border="1">
          <thead>
            <tr>
              <th>Kriteria</th>
              <th>Bobot</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kadar Air</td>
              <td>0.5</td>
            </tr>
            <tr>
              <td>Tekstur</td>
              <td>0.3</td>
            </tr>
            <tr>
              <td>Aroma</td>
              <td>0.2</td>
            </tr>
          </tbody>
        </table>
        <hr />
  
        {products.length > 0 &&
          products.map((product, pitem) => (
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
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
                  </ul>

                </div>
                <div className="product-content">
                  <h3>
                    <Link onClick={ClickHandler} to={`/product-single/${product.id}`}>
                      {product.title.toUpperCase()}
                    </Link>
                  </h3>
                  <div>
                    <span><u>Deskripsi:</u><br/> 
                    Tekstur: {product.tekstur}<br/>
                    Kadar Air: {product.kadarAir}<br/>
                    Aroma: {product.aroma}<br/>
                    </span>
                    <br/>
                  </div>
                  <div className="product-btm">
                    <div className="product-price">
                      <ul>
                        <li><h3>Rp{new Intl.NumberFormat().format(product.price)},-</h3></li>
                        <li>Stok: {product.stok}</li>
                        <li></li>
                      </ul>
                    </div>
                                        
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <DefaultModal
        addToCartProduct={addToCartProduct}
        open={open}
        onClose={handleClose}
        product={state}
      />
    </div>
  );
};

export default ProductGrid;
