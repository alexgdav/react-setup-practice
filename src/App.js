import React, { Component } from 'react'
import './style.scss'
import Form from './Form.js'
import axios from 'axios'
import apiUrl from './apiConfig.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      weather: '',
      searchParams: {
        city: '',
        country: ''
      }
    }
  }

 handleChange = event => {
   const filledOutField = {
     [event.target.name]: event.target.value
   }

   const filledOutForm = Object.assign(this.state, filledOutField)
   // console.log('form is', filledOutForm)
   this.setState({ searchParams: filledOutForm })
 }

 handleSubmit = event => {
   event.preventDefault()
   // console.log(apiUrl)
   // console.log(this.state.searchParams.city, this.state.searchParams.country)
   axios(`${apiUrl}?q=${this.state.searchParams.city},${this.state.searchParams.country}&APPID=278b204052da82f8d962cab5fd1a2a01`)
     .then(res => {
       // fill up state
       this.setState({ weather: res.data })
       // console.log('res data is ', res.data)
       // console.log('location is', res.data.name, res.data.sys.country)
       // console.log('temperature is', res.data.main.temp)
       // console.log('humidity is', res.data.main.humidity)
       // console.log('conditions are', res.data.weather[0].main)
       console.log('weather is', this.state.weather)
     })
     .catch(console.error)
 }

 render () { // set weatherJSX up to be displayed by the div below
   let weatherJSX = ''
   if (this.state.weather) {
     // If our weather state is "truthy" (not empty)
     // Store weather jsx in the variable
     const { weather } = this.state
     const temperature = Math.floor((((weather.main.temp - 273.15) * 1.8) + 32))
     weatherJSX = (
       <div>
         <p>Location:<span> {weather.name}, {weather.sys.country}</span></p>
         <hr />
         <p>Temperature: <span>{temperature}° </span></p>
         <hr />
         <p>Humidity: <span> {weather.main.humidity} % </span></p>
         <hr />
         <p>Conditions: <span> {weather.weather[0].main}</span></p>
         <hr />
       </div>
     )
   } else {
   // Otherwise, if the weather state is "falsy" (empty/null)
   // Store blank info or alt message in the variable
     weatherJSX = (
       <div className='weather-result'>
         <p>Location: </p>
         <hr />
         <p>Temperature:</p>
         <hr />
         <p>Humidity:</p>
         <hr />
         <p>Conditions:</p>
         <hr />
       </div>
     )
   }
   return (
     <div className="container-fluid">
       <div className='main'>
         <aside className="aside">
         </aside>
         <div className="splitpane-right row">
           <Form
             handleChange={this.handleChange}
             handleSubmit={this.handleSubmit}
             searchCity={this.state.searchParams.city}
             searchCountry={this.state.searchParams.country}
           />
           <div className="col-sm-11">{weatherJSX}</div>
         </div>
       </div>
     </div>
   )
 }
}
export default App
