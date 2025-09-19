import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlages, setVisitedFlages] = useState([]);
    const handleVisitedCountry = (country) =>{
       console.log('handel visited clicked', country);
       const newVisitedCountries = [...visitedCountry, country ];
       setVisitedCountry(newVisitedCountries);
    }
    const handelVisitedFlages = (flages) =>{
       const newVisitedFlages = [...visitedFlages, flages];
       setVisitedFlages(newVisitedFlages);
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
   
    return (
        <div>
            <h1>The World Map</h1>
            <h3>Total Country Visited: {visitedCountry.length}</h3>
            <h3>Total Visited Flages; {visitedFlages.length}</h3>
                <ol> 
                    {
                        visitedCountry.map(country => <li
                        key={country.cca3.cca3}
                        >{country.name.common}</li>)
                    }
                </ol> 

                <div className='image-continer'>
                    {
                        visitedFlages.map((flag, index) => <img key={index} src={flag}></img>)
                    }
                </div>

           <div className='countries'>
                 {
                    countries.map(country => <Country 
                        key={country.cca3.cca3}
                        country = {country}
                        handleVisitedCountry={handleVisitedCountry}
                        handelVisitedFlages={handelVisitedFlages}
                        ></Country> )
                }
           </div>
        </div>
    );
};

export default Countries;