import React, { useState, useEffect, useContext } from "react";
import "../../css/productsView.css";
import "../../css/general.css";
import Pagination from "@mui/material/Pagination";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Search } from "lucide-react";
import products, { getCategories } from "../../yourCustomizations/products";
import CategoryFilter from "./categoryFilter";
import ProductCard from "../productCard";
import { ThemeContext } from "../../services/themeContext";

const ProductsView = ({ category = "All" }) => {
  const [productsMap, setProductsMap] = useState(new Map());
  const [totalProductsSize, setTotalProductsSize] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const { brandAccent } = useContext(ThemeContext);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setTotalProductsSize(products.length);


        const filteredProducts = Array.from(products.values()).filter(
          (product) =>
            (selectedCategory === "All" || product.category === selectedCategory) &&
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setTotalProductsSize(filteredProducts.length);
        setProductsMap(new Map(filteredProducts.map((product) => [product.id, product])));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    const fetchCategories = async () => {
      const categories = getCategories();
      setCategories(categories);
    };

    fetchCategories();
    fetchProducts();
  }, [selectedCategory, searchQuery]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Array.from(productsMap.values()).slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleChangePage = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="productsView-page-container">
      {isLoading ? (
        <div className="spinner-border-container">
          <div className="spinner-border"></div>
        </div>
      ) : (
        <>
          <div className="carousel-container">
            <div className="top-controls">
              <div className="search-bar-container">
                <TextField
                  variant="outlined"
                  placeholder={`Search in ${selectedCategory}`}
                  size="small"
                  className="search-bar"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search size={16} color={brandAccent} strokeWidth={2.5} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "2px",
                      backgroundColor: "transparent",
                      height: "5vh",
                      "& fieldset": {
                        border: "none",
                      },
                      "&:hover fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused fieldset": {
                        border: "none",
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "var(--primary-color)",
                      },
                      "& .MuiInputBase-input": {
                        color: "var(--secondary-color)",
                        caretColor: "var(--primary-color)",
                      },
                    },
                  }}
                />
              </div>
              <div className="category-filter-container">
                <CategoryFilter
                  selectedCategory={selectedCategory}
                  handleCategorySelect={handleCategorySelect}
                  categories={categories}
                />
              </div>
            </div>
            <div className="products-container">
              <div className="products-grid">
                {currentProducts.length === 0 ? (
                  <div className="no-products-found">
                    <img src="/not-found.png" alt="No products found" />
                    <p>no products found</p>
                  </div>
                ) : (
                  currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                )}
              </div>
            </div>
          </div>
          {currentProducts.length > 0 && (
            <div className="pagination-container">
              <div className="pagination">
                <Pagination
                  size="small"
                  count={Math.ceil(totalProductsSize / productsPerPage)}
                  page={currentPage}
                  onChange={handleChangePage}
                  sx={{
                    "& .MuiPaginationItem-root": {
                      color: "var(--primary-color)",
                      marginLeft: "5px",
                      marginRight: "5px",
                    },
                    "& .MuiPaginationItem-page.Mui-selected": {
                      backgroundColor: "var(--ternary-bg)",
                      color: "var(--ternary-color)",
                    },
                    "& .MuiPaginationItem-page.Mui-selected:hover": {
                      backgroundColor: "var(--ternary-bg)",
                      color: "var(--ternary-color)",
                    },
                    "& .MuiPaginationItem-page:hover": {
                      backgroundColor: "var(--ternary-bg)",
                      color: "var(--ternary-color)",
                    },
                  }}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductsView;