import axios from 'axios'

window.axios = axios
axios.defaults.baseURL = 'http://localhost:9000/v1/'

const createsecret = async (secret, duration) => {
  const data = await axios.post('secret', {
    secret,
    duration
  })
  const messagedata = data
  return messagedata
}

const getsecret = async (uuid) => {
  const data = await axios.get('secret/' + uuid, {
  })
  const messagedata = data
  return messagedata
}

export { createsecret, getsecret }
