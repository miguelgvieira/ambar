import axios from 'axios'

const getLatLon = ({lat, lon}) => {
  return axios.get(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`)
    .then((response) => {
      return response
    })
    .catch((error) => {
      return { error, data: { main: {} } }
    });
}

export default { getLatLon }