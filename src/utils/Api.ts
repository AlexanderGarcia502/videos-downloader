import axios from 'axios'

export const BASE_URL = 'http://localhost:4000/api/youtube'

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        //'Access-Control-Allow-Origin': '*'
        //'Content-Type': 'application/x-www-form-urlencoded'
      },
})