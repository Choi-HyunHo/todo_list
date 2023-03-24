import React from "react";
import style from "./Tab.module.css";

const Tab = ({ filters, onChangeFilter, filter }) => {
    return (
        <div className={style.header}>
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
