import React, { useState } from "react";
import TodoList from "./components/todoList/TodoList";
import Tab from "./components/tab/Tab";

const filters = ["all", "active", "end"];

function App() {
	const [filter, setFilter] = useState(filters[0]);

	return (
		<>
			<Tab filters={filters} filter={filter} onChangeFilter={setFilter} />
			<TodoList filter={filter} />
		</>
	);
}

export default App;
