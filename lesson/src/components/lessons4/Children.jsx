import React from "react";

const Children = ({ title, children }) => {
    return (
        <div>
            <h3>{title}</h3>
            {children}
        </div>
    );
};

export default Children;
