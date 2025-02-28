import Button from "@mui/material/Button";
import React, { useState } from "react";

const Parent = () => {
    const [count, setCount] = useState(0);

    const upCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h3>Родитель</h3>
            <ChildCount count={count} />
            <Button type="submit" variant="contained" onClick={upCount}>
                Плюс 1
            </Button>
        </div>
    );
};

const ChildCount = ({ count }) => {
    return (
        <div>
            <p>Счетчик внутри</p>
            <p>Значение счетчика {count}</p>
        </div>
    );
};

export default Parent;
