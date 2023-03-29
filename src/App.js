import React, { createContext, useState } from "react";
import TodoList from "./components/todoList/TodoList";
import Tab from "./components/tab/Tab";

export const DarkModeContext = createContext();
const filters = ["all", "active", "end"];

function App() {
	const [filter, setFilter] = useState(filters[0]);
	const [darkMode, setDarkMode] = useState(false);

	const toggleButton = () => {
		setDarkMode(!darkMode);
	};

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleButton }}>
			<Tab filters={filters} filter={filter} onChangeFilter={setFilter} />
			<TodoList filter={filter} />
		</DarkModeContext.Provider>
	);
}

export default App;
