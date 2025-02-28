import React from "react";
import { NavLink } from "react-router-dom";

const Pagination = ({ totalProducts, productPerPage }) => {
    const totalPages = Math.ceil(totalProducts / productPerPage);

    return (
        <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
                <NavLink className="pagination-btn" key={index} to={`/products/page/${index + 1}`}>
                    {index + 1}
                </NavLink>
            ))}
        </div>
    );
};

export default Pagination;
