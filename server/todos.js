const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  todos: [
    {
      id: "1",
      employee_name: "Tiger Nixon",
      title: "Brunch this weekend?",
      profile_image: "https://material-ui.com/static/images/avatar/1.jpg",
      text: "I'll be in your neighborhood doing errands this",
    },
    {
      id: "2",
      employee_name: "Garrett Winters",
      title: "Summer BBQ",
      profile_image: "https://material-ui.com/static/images/avatar/2.jpg",
      text: "I'll be in your neighborhood doing errands this",
    },
    {
      id: "3",
      employee_name: "Ashton Cox",
      title: "Oui Oui",
      profile_image: "https://material-ui.com/static/images/avatar/3.jpg",
      text: "I'll be in your neighborhood doing errands this",
    }
  ]
}

const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, todo) => {
  if (!todo.id) {
    todo.id = Math.random().toString(36).substr(-8)
  }

  get(token).todos.push(todo)

  return todo
}

const remove = (token, id) => {
  const data = get(token)
  const todo = data.todos.find(c => c.id === id)

  if (todo) {
    data.todos = data.todos.filter(c => c !== todo)
  }

  return { todo }
}

module.exports = {
  get,
  add,
  remove
}
