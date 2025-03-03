import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/slices/todoSlice";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

const TodoList = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.todo.isLoading);

    useEffect(() => {
        dispatch(fetchTodos()); // Запускаем загрузку
    }, [dispatch]);

    return (
        <div className="todo">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <TodoItems />
                </>
            )}
            <TodoForm />
        </div>
    );
};

export default TodoList;
