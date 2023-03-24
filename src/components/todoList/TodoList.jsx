import React, { useState } from "react";
import AddTodo from "../addTodo/AddTodo";
import style from "./todoList.module.css";
import { MdOutlineDeleteForever } from "react-icons/md";

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	const handleDelete = (id) => {
		const item = todos.filter((item) => item.id !== id);
		setTodos(item);
	};

	console.log(todos);

	return (
		<>
			<ul>
				{todos &&
					todos.map((item) => (
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
