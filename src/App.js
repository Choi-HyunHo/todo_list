import React, { useState } from "react";
import TodoList from "./components/todoList/TodoList";
import Tab from "./components/tab/Tab";
import store from "./store/store";
import { Provider } from "react-redux";

// persist 관련 임포트
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export let persistor = persistStore(store);

const filters = ["all", "active", "end"];

function App() {
	const [filter, setFilter] = useState(filters[0]);

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Tab
					filters={filters}
					filter={filter}
					onChangeFilter={setFilter}
				/>
				<TodoList filter={filter} />
			</PersistGate>
		</Provider>
	);
}

export default App;
