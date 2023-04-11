import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import ProductGrid from "../ProductGrid";
import ProductList from "../ProductList";

const FilterAllProduct = ({ products, addToCartProduct,addToWishListProduct }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="col-lg-8">
      <div className="shop-section-top-inner">
        <div className="shoping-product">
          <span>Menampilkan Products 1 - 9 Of 9 Result</span>
        </div>
      </div>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <ProductGrid
            addToCartProduct={addToCartProduct}
            addToWishListProduct={addToWishListProduct}
            products={products}
          />
        </TabPane>

      </TabContent>
    </div>
  );
};

export default FilterAllProduct;
