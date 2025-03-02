import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import AddProduct from "./pages/AddProduct";
import Home from "./pages/Home";
import Products from "./pages/Products";

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
            <Header />
            <div className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/add-product" element={<AddProduct />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
