import Counter from "../component/Counter";
import Theme from "../component/Theme";

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <h1 className="title">Home</h1>
                <div className="home-wrapper">
                    <Counter />
                    <Theme />
                </div>
            </div>
        </div>
    );
};

export default Home;
