import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/layout.js";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/about.js";
import Products from "./pages/products.js";
import Contact from "./pages/contact.js";
import ProductDetails from "./pages/productDetails.js";
import NotFound from "./pages/notFound.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);