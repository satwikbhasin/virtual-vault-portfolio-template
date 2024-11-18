import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../css/categoryFilter.css";
import { ThemeContext } from "../../services/themeContext";

const CategoryFilter = ({ selectedCategory, handleCategorySelect, categories }) => {
    const navigate = useNavigate();
    const { brandAccent } = useContext(ThemeContext);
    
    const dropdownStyles = {
        color: brandAccent,
        backgroundColor: "transparent",
        border: "none",
        borderRadius: "2px",
        height: "5vh",
        fontWeight: "600",
    };

    const dropdownMenuStyles = {
        backgroundColor: "var(--primary-bg)",
        color: "var(--primary-color)",
    };

    const selectedCategoryStyles = {
        backgroundColor: "var(--primary-bg)",
        color: brandAccent,
        fontWeight: "600",
    };

    const onCategorySelect = (category) => {
        handleCategorySelect(category);
        navigate(`/products?category=${category}`);
    };

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle
                    id="dropdown-basic"
                    style={dropdownStyles}
                >
                    {selectedCategory}
                </Dropdown.Toggle>
                <Dropdown.Menu style={dropdownMenuStyles}>
                    <Dropdown.Item
                        onClick={() => onCategorySelect("All")}
                        style={selectedCategory === "All" ? selectedCategoryStyles : {}}
                    >
                        All
                    </Dropdown.Item>
                    {categories.map((category) => (
                        <Dropdown.Item
                            key={category.id}
                            onClick={() => onCategorySelect(category.categoryName)}
                            style={selectedCategory === category.categoryName ? selectedCategoryStyles : {}}
                        >
                            {category.categoryName}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default CategoryFilter;