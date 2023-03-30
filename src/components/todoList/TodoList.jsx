import React, { useState, useEffect } from "react";
import AddTodo from "../addTodo/AddTodo";
import style from "./todoList.module.css";
import { FaTrashAlt } from "react-icons/fa";

const TodoList = ({ filter }) => {
    const [status, setStatus] = useState("active");

    const [todos, setTodos] = useState(() => readTodos()); // 리렌더링 될 때마다 useState 가 호출되어서 함수 여러번 호출 막기 위해

    const handleDelete = (id) => {
        const item = todos.filter((item) => item.id !== id);
        setTodos(item);
    };

    const handleUpdate = (checked, update) => {
        const mode = checked ? "end" : "active";
        setStatus(mode);
        setTodos(
            todos.map((i) =>
                i.id === update.id ? { ...update, status: mode } : i
            )
        );
    };

    function readTodos() {
        const todos = localStorage.getItem("todos");
        return todos ? JSON.parse(todos) : [];
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // 필터링
    function filtered(todos, filter) {
        if (filter === "all") {
            return todos;
        }

        return todos.filter((item) => item.status === filter);
    }

    const filterList = filtered(todos, filter);

    return (
        <div className={style.container}>
            <ul className={style.list}>
                {filterList &&
                    filterList.map((item) => (
                        <li className={style.todo} key={item.id}>
                            <input
                                className={style.checkbox}
                                type="checkbox"
                                checked={item.status === "end"}
                                readOnly
                                onClick={(e) =>
                                    handleUpdate(e.target.checked, item)
                                }
                            />
                            <span className={style.text}>{item.text}</span>
                            <span className={style.icon}>
                                <button
                                    className={style.button}
                                    onClick={() => handleDelete(item.id)}
                                >
                                    <FaTrashAlt />
                                </button>
                            </span>
                        </li>
                    ))}
            </ul>
            <AddTodo add={setTodos} data={todos} />
        </div>
    );
};

export default TodoList;
