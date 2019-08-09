import React, {Component} from 'react';
//import { Route, Link } from 'react-router-dom'
import countries from './countries.json'
//import Home from './components/Home'
import axios from 'axios'
//import CountryDetail from './components/CountryDetail.js'
import './App.css';




export default class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: []
    }
  }
  componentDidMount() {
    axios.get("http://localhost:3000/countries") //connected to the backend
      .then(response => {
      this.setState({countries: response.data})
    })
  }

  render() {
    return (
      <div>
        {this.state.countries.map(country => <h1 key={country.cca3}>{country.name.common}</h1>)}
      </div>
    )
  }
}


// export default function App() {
//   let countriesList = countries.map((country) => (
//     <li className="countryList"><Link to={`/country/${country.cca3}`}>{country.name.common}{country.flag.normalize()}</Link></li>
//    ) )
//   return (
//     <div id="main-container">
//       <aside>
//       <ul className="countries-container">
//         {countriesList}
//       </ul>
//       </aside>
//       <Route exact path='/' component={Home} />
//       <Route path='/country/:countryId' component={CountryDetail}/>
//     </div>
//   )
// }



