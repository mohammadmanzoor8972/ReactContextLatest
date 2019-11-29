import Cars from "./Cars";
import React from "react";

const ProductList = () => (
  <div className="product-list">
    <h2>Product list:</h2>
    <Cars />
    {/* Other potential product categories which we will skip for this demo: */}
    {/* <Electronics /> */}
    {/* <Clothes /> */}
    {/* <Shoes /> */}
  </div>
);

export default ProductList;
