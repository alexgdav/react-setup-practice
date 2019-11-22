import React from 'react'

const Form = ({ searchCity, searchCountry, handleSubmit, handleChange }) => (
  <form className="formbody col-sm-12" onSubmit={handleSubmit}>
    <input className="forminput"
      placeholder="city name"
      value={searchCity}
      name="cityname"
      onChange={handleChange}
    />
    <input className="forminput"
      placeholder="country"
      value={searchCountry}
      name="countrycode"
      onChange={handleChange}
    />
    <button className="get-button" type="submit">Get Weather</button>
  </form>
)

export default Form
