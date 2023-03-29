import React, { useState, useRef, useEffect } from "react";
import style from "./AddTodo.module.css";
import { v4 as uuid4 } from "uuid";

const AddTodo = ({ add, data }) => {
	const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		add([...data, { id: uuid4(), text: value, status: "active" }]);
		setValue(" ");
	};

	return (
		<form className={style.form}>
			<input
				className={style.input}
				type="text"
				onChange={handleChange}
				value={value}
			/>
			<button className={style.button} onClick={handleSubmit}>
				Add
			</button>
		</form>
	);
};

export default AddTodo;
