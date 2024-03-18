import React, { useState } from "react";
import "../css/Cakes.css";
import FilterButton from "./FilterButton";
import ProductCard from "./ProductCard";

const FILTER_MAP = {
    All: () => true,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function Cakes(props) {
    const [filter, setFilter] = useState("All");

    const filterList = FILTER_NAMES.map(name => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ));

    const cakeList = props.cakes.filter(FILTER_MAP[filter]).map(cake => (
        <ProductCard
            id={cake.id}
            name={cake.name}
            description={cake.description}
            img={cake.img}
            onClick={() => props.onClick(cake.id)}
            key={cake.id}
        />
    ));

    return (
        <section className="cakes" id="cakes">
            <div className="cakes__container">
                <h2 className="cakes__title">Cakes</h2>
                <div className="cakes__filters">
                    {filterList}
                </div>
                <div className="cakes__cards">
                    {cakeList}
                </div>
            </div>
        </section>
    );
}

export default Cakes;