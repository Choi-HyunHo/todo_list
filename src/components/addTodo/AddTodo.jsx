import React, { useState, useRef, useEffect } from "react";

const AddTodo = ({ add, data }) => {
	const [value, setValue] = useState("");
	const id = useRef(0);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		add([...data, { id: ++id.current, text: value, status: "active" }]);
		setValue(" ");
	};

	useEffect(() => {
		console.log(value);
	}, [value]);

	return (
		<form>
			<input type="text" onChange={handleChange} value={value} />
			<button onClick={handleSubmit}>Add</button>
		</form>
	);
};

export default AddTodo;
