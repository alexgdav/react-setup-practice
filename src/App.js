import React, { Component } from 'react'
import './style.scss'
import Form from './Form.js'
import axios from 'axios'
import apiUrl from './apiConfig.js'
import WeatherResult from './WeatherResult'

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
       // set state with res data
       this.setState({ weather: res.data })
       // console.log('res data is ', res.data)
       // console.log('location is', res.data.name, res.data.sys.country)
       // console.log('temperature is', res.data.main.temp)
       // console.log('humidity is', res.data.main.humidity)
       // console.log('conditions are', res.data.weather[0].main)
       // console.log('weather is', this.state.weather)
     })
     .catch(console.error)
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
             searchCity={this.state.searchParams.city}
             searchCountry={this.state.searchParams.country}
           />
           <div className="col-sm-11">
             <WeatherResult props={this.state.weather}/>
           </div>
         </div>
       </div>
     </div>
   )
 }
}
export default App
