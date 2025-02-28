import { useEffect, useState } from "react";

const Timer = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
            <p>Time: {time.toLocaleTimeString()}</p>
        </>
    );
};

export default Timer;
