import { memo } from "react";

const CounterButton = memo(({ onClick, disabled, children }) => {
    return (
        <button onClick={onClick} disabled={disabled} className="btn" type="button">
            {children}
        </button>
    );
});

export default CounterButton;
