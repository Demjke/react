import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Counters from "./pages//Counters";
import Home from "./pages//Home";
import Articles from "./pages/Articles";
import Comments from "./pages/Comments";
import HomeWorks from "./pages/Homeworks";
import Lessons from "./pages/Lessons";
import Products from "./pages/Products";
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
                        <Route path="/lessons" element={<Lessons />} />
                        <Route path="/homeworks" element={<HomeWorks />} />
                        <Route path="/articles/*" element={<Articles />} />
                        <Route path="/products/*" element={<Products />} />
                    </Routes>
                </div>
            </main>
        </div>
    );
};

export default App;
