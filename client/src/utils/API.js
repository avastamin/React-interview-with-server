const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001'


let token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAll = () =>
  fetch(`${api}/todos`, { headers })
    .then(res => res.json())
    .then(data => data.todos)