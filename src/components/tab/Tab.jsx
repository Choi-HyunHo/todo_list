import React, { useContext, useState } from "react";
import style from "./Tab.module.css";
import { MdDarkMode } from "react-icons/md";
import { DarkModeContext } from "../../App";
import { useEffect } from "react";

const Tab = ({ filters, onChangeFilter, filter }) => {
	const { darkMode, toggleButton } = useContext(DarkModeContext);

	const value = JSON.parse(localStorage.getItem("mode"));

	console.log(value);

	return (
		<div className={style.header}>
			<MdDarkMode onClick={() => toggleButton()} />
			<ul className={style.filters}>
				{filters.map((list, index) => (
					<li key={index}>
						<button
							className={`${
								darkMode !== true
									? style.filter
									: style.darkFilter
							} ${filter === list && style.selected}`}
							onClick={() => onChangeFilter(list)}
						>
							{list}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Tab;
