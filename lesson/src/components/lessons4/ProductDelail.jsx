import React from "react";
import { useParams } from "react-router-dom";

const ProductDelail = ({ products }) => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id, 10));

    if (!product) {
        return <div>Товар не найден</div>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
};

export default ProductDelail;
