import React from "react";
import"../css/FilterButton.css";

function FilterButton(props) {
    return (
        <button
            type="button"
            className="btn filter__button"
            aria-pressed={props.isPressed}
            onClick={() => props.setFilter(props.name)}
        >
            {props.name}
        </button>
    );
}

export default FilterButton;