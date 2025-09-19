import React, { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    const [visited, setVisited] = useState(false);
    // console.log(country.area.area);
    const handelClick = () =>{
        setVisited(true);
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
            <h3>Country Name: {country.name.common}</h3>
            <h4>Population: {country.population.population}</h4>
            <p>Area: {country.area.area} {country.area.area > 200000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handelClick}>
                {visited ? "visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default Country;