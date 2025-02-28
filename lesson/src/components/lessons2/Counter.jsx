import { useCallback, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount(prev => Math.max(prev - 1, 0));
    }, []);

    const remove = useCallback(() => {
        setCount(0);
    }, []);

    return (
        <div className="counter">
            <p className="text" style={{ color: count === 0 ? "red" : "#000" }}>
                {count}
            </p>
            <button onClick={decrement} className="btn" type="button">
                -
            </button>
            <button onClick={increment} disabled={count >= 5} className="btn" type="button">
                +
            </button>
            <button onClick={remove} className="btn" type="button">
                RESET
            </button>
        </div>
    );
};

export default Counter;
