import React from 'react'
import countries from '../countries.json'
import { Link } from "react-router-dom"
import './CountryDetail.css'

export default function Country(props) {
  let { params } = props.match
  let { countryId } = params;
  let foundCountry = countries.find((oneCountry) => (
    oneCountry.cca3 === countryId
))
  
  return (
    <div className="country-container">
      <div className="country">
        <h2>{foundCountry.name.common}</h2>
        <h3>Capital: {foundCountry.capital[0]}</h3>
        <h3>Area: {foundCountry.area}</h3>
        <h3>Borders:</h3>
        <ul>
          {foundCountry.borders.map((countryCode) => {
            return (
              <li key={countryCode}>
                <Link to={`/country/${foundCountry.cca3}`}>{countryCode}</Link>
              </li>
            )
          })}
          </ul>
      </div>
    </div>
  )
}

