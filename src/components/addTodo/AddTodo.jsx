import React, { useState } from "react";

const AddTodo = ({ add, data }) => {
	const [value, setValue] = useState();

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	// id 동적으로 변하게 처리
	const handleSubmit = (e) => {
		e.preventDefault();
		add([...data, { id: 3, text: value }]);
		setValue(" ");
	};

	return (
		<form>
			<input type="text" onChange={handleChange} value={value} />
			<button onClick={handleSubmit}>Add</button>
		</form>
	);
};

export default AddTodo;
