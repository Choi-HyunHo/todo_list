import React from "react";
import style from "./Tab.module.css";
import { MdDarkMode } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { modeChange } from "../../store/modeSlice";

const Tab = ({ filters, onChangeFilter, filter }) => {
	const dispatch = useDispatch();

	const { value } = useSelector((state) => state.mode);

	console.log(value);

	return (
		<div className={style.header}>
			<MdDarkMode onClick={() => dispatch(modeChange(!value))} />
			<ul className={style.filters}>
				{filters.map((list, index) => (
					<li key={index}>
						<button
							className={`${
								value !== true ? style.filter : style.darkFilter
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
