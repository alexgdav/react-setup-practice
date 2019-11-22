import React, { Component } from 'react'
import './style.scss'
import Form from './Form.js'
import WeatherResult from './WeatherResult.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      cityname: '',
      countrycode: ''
    }
  }

 handleChange = event => {
   const getWeather = event.target.value
   this.setState({ [getWeather]: event.target.value })
   console.log(getWeather)
 }

 handleSubmit = event => {
   event.preventDefault()
 }

 render () {
   return (
     <div className="container-fluid">
       <div className='main'>
         <aside className="aside">
         </aside>
         <div className="splitpane-right row">
           <Form
             handleChange={this.handleChange}
             handleSubmit={this.handleSubmit}
             searchCity={this.state.searchCity}
             searchCountry={this.state.SearchCountry}
           />
           <ul><WeatherResult /></ul>
         </div>
       </div>
     </div>
   )
 }
}
export default App
