import React, { useState } from "react";
import TodoList from "./components/todoList/TodoList";
import Tab from "./components/tab/Tab";
import store from "./store/store";
import { Provider } from "react-redux";

const filters = ["all", "active", "end"];

function App() {
	const [filter, setFilter] = useState(filters[0]);

	return (
		<Provider store={store}>
			<Tab filters={filters} filter={filter} onChangeFilter={setFilter} />
			<TodoList filter={filter} />
		</Provider>
	);
}

export default App;
