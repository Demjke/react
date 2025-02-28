import TemperatureConverter from "../components/homeworks/TemperatureConverter";
import ToDoList from "../components/homeworks/ToDoList";

const HomeWorks = () => {
    return (
        <div className="homeworks">
            <h1>Homeworks</h1>
            <div className="homework">
                <h2>TemperatureConverter</h2>
                <TemperatureConverter />
                <h2>ToDoList</h2>
                <ToDoList />
            </div>
        </div>
    );
};

export default HomeWorks;
