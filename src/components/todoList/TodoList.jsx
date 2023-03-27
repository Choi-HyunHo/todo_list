import React, { useState } from "react";
import AddTodo from "../addTodo/AddTodo";
import style from "./todoList.module.css";
import { MdOutlineDeleteForever } from "react-icons/md";

const TodoList = ({ filter }) => {
    const [status, setStatus] = useState("active");

    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "공부하자",
            status: status,
        },
    ]);

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
                        <li key={item.id}>
                            <input
                                type="checkbox"
                                checked={item.status === "end"}
                                readOnly
                                onClick={(e) =>
                                    handleUpdate(e.target.checked, item)
                                }
                            />
                            <span>{item.text}</span>
                            <button onClick={() => handleDelete(item.id)}>
                                <MdOutlineDeleteForever />
                            </button>
                        </li>
                    ))}
            </ul>
            <AddTodo add={setTodos} data={todos} />
        </div>
    );
};

export default TodoList;
