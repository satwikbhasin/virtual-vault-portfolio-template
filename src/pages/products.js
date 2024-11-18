import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/general.css"
import ProductsView from "../components/productsView/productsView.js";
import SprayPaint from "../components/customizations/sprayPaint.js";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const query = useQuery();
  const [category, setCategory] = useState(query.get("category") || "All");

  useEffect(() => {
    setCategory(query.get("category") || "All");
  }, [query]);

  return (
    <>
      <SprayPaint />
      <ProductsView category={category} />
    </>
  );
};

export default Products;