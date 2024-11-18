import React from "react";
import "bootstrap";
import { useParams } from "react-router-dom";
import ProductDetailsView from "../components/productDetailsView/productDetailsView.js";
import SprayPaint from "../components/customizations/sprayPaint.js";

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <>
      <SprayPaint />
      <ProductDetailsView productId={productId} />
    </>
  );
};

export default ProductDetails;
