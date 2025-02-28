import React from "react";
import { useParams } from "react-router-dom";
import Pagination from "./Pagination";
import Product from "./Product";

const ProductList = ({ products }) => {
    const { pageNumber } = useParams();
    const currentPage = pageNumber ? parseInt(pageNumber, 10) : 1;
    const productPerPage = 3;
    const startIndex = (currentPage - 1) * productPerPage;
    const currentProducts = products.slice(startIndex, startIndex + productPerPage);

    return (
        <div>
            <div className="products">
                {currentProducts.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
            <Pagination totalProducts={products.length} productPerPage={productPerPage} />
        </div>
    );
};

export default ProductList;
