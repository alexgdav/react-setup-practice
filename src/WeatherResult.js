import React from 'react'

const WeatherResult = props => {
  console.log('props', props)
  let weatherJSX
  props = props.props
  // console.log('res data is ', res.data)
  // console.log('location is', res.data.name, res.data.sys.country)
  // console.log('temperature is', res.data.main.temp)
  // console.log('humidity is', res.data.main.humidity)
  // console.log('conditions are', res.data.weather[0].main)
  // console.log('weather is', this.state.weather)
  if (props) {
    const temperature = Math.floor((((props.main.temp - 273.15) * 1.8) + 32))
    weatherJSX = (
      <div>
        <p>Location:<span> {props.name}, {props.sys.country}</span></p>
        <hr />
        <p>Temperature: <span>{temperature}° </span></p>
        <hr />
        <p>Humidity: <span> {props.main.humidity} % </span></p>
        <hr />
        <p>Conditions: <span> {props.weather[0].main}</span></p>
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
    <div className="col-sm-11">{weatherJSX}</div>

  )
}

export default WeatherResult
