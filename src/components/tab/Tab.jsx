import React from "react";
import style from "./Tab.module.css";
import { HiMoon } from "react-icons/hi";
import { HiSun } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { modeChange } from "../../store/modeSlice";

const Tab = ({ filters, onChangeFilter, filter }) => {
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.mode);

    if (value === true) {
        document.documentElement.classList.add("add");
    } else {
        document.documentElement.classList.remove("add");
    }

    return (
        <div className={style.header}>
            <button
                className={style.toggle}
                onClick={() => dispatch(modeChange(!value))}
            >
                {value === true ? <HiMoon /> : <HiSun />}
            </button>
            <ul className={style.filters}>
                {filters.map((list, index) => (
                    <li key={index}>
                        <button
                            className={`${style.filter} ${
                                filter === list && style.selected
                            }`}
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
