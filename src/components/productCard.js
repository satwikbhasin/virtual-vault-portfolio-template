import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
    product
}) => {
    return (
        <div className="product-card">
            <Link to={"/product/" + product.id} className="card-name">
                <div className="card-image-container">
                    <img src={product.image} alt={product.name} className="card-image" />
                    <h3 className="card-title">{product.name}</h3>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;