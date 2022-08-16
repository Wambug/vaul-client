import axios from 'axios'

window.axios = axios
axios.defaults.baseURL = 'https://secret-vault-trial.herokuapp.com/v1/'

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
