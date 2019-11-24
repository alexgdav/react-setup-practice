import React from 'react'

const Form = ({ searchParams, handleSubmit, handleChange }) => (
  <form className="formbody col-sm-12" onSubmit={handleSubmit}>
    <input className="forminput"
      placeholder="city"
      value={searchParams}
      name="city"
      onChange={handleChange}
    />
    <input className="forminput"
      placeholder="country"
      value={searchParams}
      name="country"
      onChange={handleChange}
    />
    <button className="get-button" type="submit">Get Weather</button>
  </form>
)

export default Form
