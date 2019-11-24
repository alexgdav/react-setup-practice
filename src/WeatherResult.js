import React, { Fragment } from 'react'

const WeatherResult = (weather) => (
  <Fragment>
    <li>Location:{weather.name}</li>
    <li>Temperature:</li>
    <li>Humidity:</li>
    <li>Conditions:</li>
  </Fragment>
)

export default WeatherResult
