import Button from "@mui/material/Button";
import { useState } from "react";
import Timer from "../components/lessons2/Timer";
import Visible from "../components/lessons2/Visible";
import InputForm from "../components/lessons3/InputForm";
import Parent from "../components/lessons3/Parent";
import Rating from "../components/lessons3/Rating";
import TextInput from "../components/lessons3/TextInput";
import Student from "../components/lessons3/propType";

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
        </div>
    );
};

export default CounterLesson;
