import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDelail from "../components/lessons4/ProductDelail";
import ProductList from "../components/lessons4/ProductList";

const Products = () => {
    const products = [
        { id: 1, name: "Товар 1", description: "Описание товара 1", price: "100 руб." },
        { id: 2, name: "Товар 2", description: "Описание товара 2", price: "200 руб." },
        { id: 3, name: "Товар 3", description: "Описание товара 3", price: "300 руб." },
        { id: 4, name: "Товар 4", description: "Описание товара 4", price: "400 руб." },
        { id: 5, name: "Товар 5", description: "Описание товара 5", price: "500 руб." },
        { id: 6, name: "Товар 6", description: "Описание товара 6", price: "600 руб." },
        { id: 7, name: "Товар 7", description: "Описание товара 7", price: "700 руб." },
        { id: 8, name: "Товар 8", description: "Описание товара 8", price: "800 руб." },
        { id: 9, name: "Товар 9", description: "Описание товара 9", price: "900 руб." },
    ];

    return (
        <div>
            <h1>Товары</h1>
            <Routes>
                <Route path="page/:pageNumber" element={<ProductList products={products} />} />
                <Route path="product/:id" element={<ProductDelail products={products} />} />
                <Route path="/" element={<ProductList products={products} />} />
            </Routes>
        </div>
    );
};

export default Products;
