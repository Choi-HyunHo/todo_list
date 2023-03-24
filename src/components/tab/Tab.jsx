import React from "react";

const Tab = ({ filters, onChangeFilter }) => {
	return (
		<ul>
			{filters.map((list, index) => (
				<li key={index}>
					<button onClick={() => onChangeFilter(list)}>{list}</button>
				</li>
			))}
		</ul>
	);
};

export default Tab;
