import React from 'react'
import countries from '../countries.json'
import { Link } from "react-router-dom"
import './CountryDetail.css'

export default function Country(props) {
  var { params } = props.match
  var { countryId } = params;
  const foundCountry = countries.find((oneCountry) => (
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
            var foundBorder = countries.find((oneBorder) => (
              oneBorder === countryId
            ))
            return (
              <li key={countryCode}>
                <Link to={`/country/${countryCode}`}>{countryCode}</Link>
              </li>
            )
          })}
          </ul>
      </div>
    </div>
  )
}

