import React, { useState } from "react";
import AddTodo from "../addTodo/AddTodo";

const TodoList = () => {
	const [todos, setTodos] = useState([
		{ id: 1, text: "공부하기" },
		{ id: 2, text: "운동하기" },
	]);

	return (
		<>
			<ul>
				{todos.map((item) => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
			<AddTodo add={setTodos} data={todos} />
		</>
	);
};

export default TodoList;
