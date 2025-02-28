import React, { useState } from "react";

const MouseTracker = ({ render }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = e => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <>
            <h3>MouseTracker</h3>
            <div style={{ width: "100%", height: "300px", background: "red" }} onMouseMove={handleMouseMove}>
                {render(position)}
            </div>
        </>
    );
};

export default MouseTracker;
