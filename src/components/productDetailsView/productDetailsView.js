import React, { useState, useEffect } from "react";
import "bootstrap";
import { Button, Dropdown } from "react-bootstrap";
import "../../css/productDetailsView.css";
import "../../css/general.css";
import {
  copyPageLinkToClipboard,
  downloadProductImage,
  downloadProductInfoPDF,
} from "./helper.js";
import { Blend, ChevronRight, Download, Link, CheckCircle2, ExternalLink } from "lucide-react";
import { getProductById, getSimilarProducts } from "../../yourCustomizations/products.js";
import { showSimilarProducts, showOpenProductLinkButton, showDownloadProductInfoButton, showCopyLinkButton } from "../../yourCustomizations/productDetailsPage.js";
import ProductCard from "../productCard.js";
import { Link as RouterLink } from "react-router-dom";

const ProductDetailsView = ({ productId }) => {
  const [product, setProduct] = useState(new Map());
  const [showCopied, setShowCopied] = useState(false);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductAndSimilarProducts = async () => {
      try {
        setIsLoading(true);

        const fetchedProduct = getProductById(productId);
        setProduct(fetchedProduct);

        const similarProducts = getSimilarProducts(fetchedProduct.id);

        setSimilarProducts(similarProducts);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductAndSimilarProducts();
  }, [productId]);

  const handleCopyLink = (productId) => {
    copyPageLinkToClipboard(productId);
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 3000);
  };

  return (
    <>
      <div className="productDetailsView-page-container ">
        {isLoading ? (
          <div className="product-details-flex">
            <div className="skeleton skeleton-image"></div>
            <div className="product-info-container">
              <h2 className="skeleton skeleton-text" aria-hidden="true"></h2>
              <p className="skeleton skeleton-text" aria-hidden="true"></p>
              <p className="skeleton skeleton-text" aria-hidden="true"></p>
              <div className="skeleton skeleton-button" aria-hidden="true"></div>
              <div className="skeleton skeleton-button" aria-hidden="true"></div>
              <div className="skeleton skeleton-button" aria-hidden="true"></div>
              <div className="skeleton skeleton-button" aria-hidden="true"></div>
            </div>
          </div>
        ) : (
          <>
            <div className="product-details-flex">
              <div
                className="product-image-container"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="product-info-container">
                <h2 className="product-heading">
                  <span className="category-name">
                    <RouterLink className="no-underline" to={"/products"}>
                      Products
                    </RouterLink>
                  </span>
                  <ChevronRight size={18} strokeWidth={3} />
                  <span className="category-name">
                    <RouterLink className="no-underline" to={"/products?category=" + product.category}>
                      {product.category}
                    </RouterLink>
                  </span>
                  <ChevronRight size={18} strokeWidth={3} />
                  {product.name}
                </h2>
                <p className="product-description">{product.description}</p>
                <div className="product-buttons">
                  {showOpenProductLinkButton && product.link && (
                    <Button
                      onClick={() => {
                        window.open(product.link, "_blank");
                      }}
                      className="utility-button"
                    >
                      <div className="utility-button-internal">
                        <ExternalLink size={16} />
                        <span>Open</span>
                      </div>
                    </Button>
                  )}
                  {showDownloadProductInfoButton && (
                    <Dropdown>
                      <Dropdown.Toggle className="utility-button" id="dropdown-basic">
                        <Download size={16} />
                        <span>Download</span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="download-dropdown-menu">
                        <Dropdown.Item
                          onClick={() => {
                            downloadProductImage(product.image, product.name);
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-image me-1" viewBox="0 0 16 16">
                            <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12z" />
                          </svg>
                          <span>Image</span>
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            downloadProductInfoPDF(product);
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-pdf-fill me-1" viewBox="0 0 16 16">
                            <path d="M5.523 10.424q.21-.124.459-.238a8 8 0 0 1-.45.606c-.28.337-.498.516-.635.572l-.035.012a.3.3 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548m2.455-1.647q-.178.037-.356.078a21 21 0 0 0 .5-1.05 12 12 0 0 0 .51.858q-.326.048-.654.114m2.525.939a4 4 0 0 1-.435-.41q.344.007.612.054c.317.057.466.147.518.209a.1.1 0 0 1 .026.064.44.44 0 0 1-.06.2.3.3 0 0 1-.094.124.1.1 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256M8.278 4.97c-.04.244-.108.524-.2.829a5 5 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.5.5 0 0 1 .145-.04c.013.03.028.092.032.198q.008.183-.038.465z" />
                            <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.6 11.6 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.86.86 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.84.84 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.8 5.8 0 0 0-1.335-.05 11 11 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.24 1.24 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a20 20 0 0 1-1.062 2.227 7.7 7.7 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103" />
                          </svg>
                          <span>PDF</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
                  {showCopyLinkButton && (
                    <Button
                      onClick={
                        showCopied ? null :
                          () => handleCopyLink(productId)}
                      className="utility-button"
                    >
                      {!showCopied ? (
                        <div className="utility-button-internal">
                          <Link size={16} />
                          <span>Copy Link</span>
                        </div>
                      ) : (
                        <div className="utility-button-internal">
                          <CheckCircle2 size={16} />
                          <span>Link Copied</span>
                        </div>
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </div>
            {!showSimilarProducts || similarProducts.length === 0 ? null : (
              <>
                <div className="similar-products-divider"></div>
                <div className="similar-products-heading-container">
                  <p className="similar-products-heading">
                    <Blend size={24} />
                    More from
                    <RouterLink to={"/products?category=" + product.category}>
                      <span className="category-name-similar-products">{product.category}</span>
                    </RouterLink>
                  </p>
                </div>

                <div className="similar-products-holder">
                  {product.category && similarProducts.length === 0 ? (
                    "No Products"
                  ) : (
                    <div className="similar-products-row">
                      {similarProducts.map((product) => (
                        <ProductCard product={product} key={product.id} />
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetailsView;