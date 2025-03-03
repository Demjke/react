import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../redux/slices/todoSlice";

const TodoForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const handleAddItem = () => {
        text && dispatch(addtodo(text));
        setText("");
    };

    const handleChangeItem = e => {
        setText(e.target.value);
    };

    return (
        <div className="todo-form">
            <label htmlFor="">
                <textarea name="" id="" placeholder="Input Text" value={text} onChange={handleChangeItem}></textarea>
                <button type="button" onClick={handleAddItem}>
                    Add
                </button>
            </label>
        </div>
    );
};

export default TodoForm;
