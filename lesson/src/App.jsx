import Message from "./components/Message";
import "./styles/style.css";

function App() {
    return (
        <div className="app">
            <div className="container">
                <h1>Message</h1>
                <Message text="Hello" />
            </div>
        </div>
    );
}

export default App;
