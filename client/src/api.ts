const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:5001'

// Identifies this browser session to the server (any value works)
const token = Math.random().toString(36).slice(-8)

const headers = {
  Accept: 'application/json',
  Authorization: token,
}

export const getAll = () =>
  fetch(`${API_URL}/employees`, { headers })
    .then((res) => res.json())
    .then((data) => data.employees)
