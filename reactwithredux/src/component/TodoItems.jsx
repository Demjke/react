import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completed, remove } from "../redux/slices/todoSlice";

const TodoItem = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo.items);
    console.log(todos);

    return (
        <div className="todo-items">
            {todos.length > 0
                ? todos.map(({ id, text, isCompleted }) => {
                      return (
                          <div
                              key={id}
                              className="todo-item"
                              style={{
                                  display: "flex",
                                  alignItems: "center",
                                  background: isCompleted ? "#999" : "#fff",
                              }}
                          >
                              <div className="todo-item__text">{text}</div>
                              <button className="todo-item__btn" onClick={() => dispatch(remove(id))}>
                                  x
                              </button>
                              <button className="todo-item__btn" onClick={() => dispatch(completed(id))}>
                                  {isCompleted ? "undo" : "completed"}
                              </button>
                          </div>
                      );
                  })
                : "Nothing"}
        </div>
    );
};

export default TodoItem;
