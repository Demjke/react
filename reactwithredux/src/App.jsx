import { useSelector } from "react-redux";
import Counter from "./component/Counter";
import Theme from "./component/Theme";

const App = () => {
    const theme = useSelector(state => state.theme);

    return (
        <div
            className="app"
            style={{
                background: theme ? "#fff" : "#000",
                color: theme ? "#000" : "#fff",
            }}
        >
            <Counter />
            <Theme />
        </div>
    );
};

export default App;
