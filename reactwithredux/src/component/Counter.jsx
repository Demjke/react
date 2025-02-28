import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/counterSlice";

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Счетчик: {counter}</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(reset())}>Сброс</button>
        </div>
    );
};

export default Counter;
