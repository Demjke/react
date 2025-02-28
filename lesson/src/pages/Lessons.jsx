import Button from "@mui/material/Button";
import { useState } from "react";
import Timer from "../components/lessons2/Timer";
import Visible from "../components/lessons2/Visible";
import InputForm from "../components/lessons3/InputForm";
import Parent from "../components/lessons3/Parent";
import Rating from "../components/lessons3/Rating";
import TextInput from "../components/lessons3/TextInput";
import Student from "../components/lessons3/propType";
import Children from "../components/lessons4/Children";
import MouseTracker from "../components/lessons4/MouseTracker";

const CounterLesson = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="lessons">
            <div className="lesson">
                <h2>Lesson 2</h2>
                <Timer />
                <span>{count}</span>
                <Button type="submit" variant="contained" onClick={() => setCount(count + 1)}>
                    +
                </Button>
                <Visible text="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
            </div>

            <div className="lesson">
                <h2>Lesson 3</h2>
                <TextInput />
                <Parent />
                <InputForm />
                <Rating />
                <Student name="Dima" age={30} isStudent />
            </div>

            <div className="lesson">
                <h2>Lesson 4</h2>
                <Children title="Title 1">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <button>button</button>
                </Children>
                <Children title="Title 2">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, impedit.</p>
                </Children>
                <MouseTracker
                    render={({ x, y }) => (
                        <p>
                            X: {x}, Y: {y}
                        </p>
                    )}
                />
            </div>
        </div>
    );
};

export default CounterLesson;
