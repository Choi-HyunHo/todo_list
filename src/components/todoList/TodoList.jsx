import React, { useState } from "react";
import AddTodo from "../addTodo/AddTodo";
import style from "./todoList.module.css";
import { MdOutlineDeleteForever } from "react-icons/md";

const TodoList = ({ filter }) => {
	const [todos, setTodos] = useState([
		{
			id: "1",
			text: "공부하자",
			status: "active",
		},
	]);

	const handleDelete = (id) => {
		const item = todos.filter((item) => item.id !== id);
		setTodos(item);
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
		<>
			<ul>
				{filterList &&
					filterList.map((item) => (
						<div key={item.id} className={style.wrap}>
							<li>{item.text}</li>
							<button
								className={style.btn}
								onClick={() => handleDelete(item.id)}
							>
								<MdOutlineDeleteForever />
							</button>
						</div>
					))}
			</ul>
			<AddTodo add={setTodos} data={todos} />
		</>
	);
};

export default TodoList;
