import axios from 'axios'

const api = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function sendContactRequest(payload) {
  const response = await api.post('/workintech', payload)
  return response.data
}
