import React from 'react';
import { Route, Link } from 'react-router-dom'
import countries from './countries.json'
import Home from './components/Home'
import CountryDetail from './components/CountryDetail.js'
import './App.css';



export default function App() {
  let countriesList = countries.map((country) => (
    <li className="countryList"><Link to={`/country/${country.cca3}`}>{country.name.common}{country.flag.normalize()}</Link></li>
   ) )
  return (
    <div id="main-container">
      <aside>
      <ul className="countries-container">
        {countriesList}
      </ul>
      </aside>
      <Route exact path='/' component={Home} />
      <Route path='/country/:countryId' component={CountryDetail}/>
    </div>
  )
}



