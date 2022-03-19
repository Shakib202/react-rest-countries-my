import React from 'react';
import './Country.css'
const Country = (props) =>{
  const {name, population, region, area, flags} = props.country;
  return (
    <div className='country bg-info'>
      <h1>Country Name: {name.common}</h1>
      <img src={flags.png} alt="" />
      <p>Country Population: {population}</p>
      <p><small>Region: {region}</small></p>
      <p><small>Area: {area}</small></p>
    </div>
  );
};

export default Country;