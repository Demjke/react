import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    return (
        <div className="product">
            <h2>
                <Link to={`/products/product/${product.id}`}>{product.name}</Link>
            </h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
};

export default Product;
