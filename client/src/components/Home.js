import React from 'react';
import "../css/style.css";
import Promo from './Promo';
import Cakes from './Cakes';


function Home(props) {
    const CAKES_DATA = props.cakes;
    const items = props.items;
    
    return (
        <div className="home">

            <Promo />

            {/* <DessertOfTheDay
                dessertOfTheDayId={dessertOfTheDayId}
                allData={ALL_DATA}
                items={items}
                onClick={(id) => props.onClick(id)}
            /> */}

            <Cakes
                cakes={CAKES_DATA}
                items={items}
                onClick={(id) => props.onClick(id)}
            />

            
        </div>
    );
}

export default Home;