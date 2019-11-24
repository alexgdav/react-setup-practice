let apiUrl
const apiUrls = {
  production: 'http://api.openweathermap.org/data/2.5/weather',
  development: 'http://api.openweathermap.org/data/2.5/weather'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
