import { useCallback, useState } from "react";
import Counter from "../components/lessons2/Counter";

const Counters = () => {
    const products = [
        { id: 1, name: "product-1" },
        { id: 2, name: "product-2" },
        { id: 3, name: "product-3" },
    ];

    const [resetKey, setResetKey] = useState(0);

    const removeAll = useCallback(() => {
        setResetKey(prev => prev + 1); // Обновляем ключ, чтобы сбросить счетчики
    }, []);

    return (
        <div className="counters">
            <h1>Счетчик</h1>
            {products.map(({ id, name }) => (
                <div className="product" key={id}>
                    <div className="product-name">{name}</div>
                    <Counter key={`${resetKey}-${id}`} />
                </div>
            ))}
            <button onClick={removeAll} type="button">
                RESET ALL
            </button>
        </div>
    );
};

export default Counters;
