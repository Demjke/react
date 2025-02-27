import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Counters from "./pages//Counters";
import Home from "./pages//Home";
import Comments from "./pages/Comments";
import "./styles/style.css";

const App = () => {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/comments" element={<Comments />} />
                        <Route path="/counters" element={<Counters />} />
                    </Routes>
                </div>
            </main>
        </div>
    );
};

export default App;
