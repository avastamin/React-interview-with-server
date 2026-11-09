import cors from 'cors'
import express from 'express'
import * as employees from './employees.ts'

export const app = express()

app.use(cors())
app.use(express.json())

app.use((req, _res, next) => {
  console.log(`${req.method} ${req.originalUrl}`)
  next()
})

app.get('/', (_req, res) => {
  res.type('text/plain').send(`Welcome to the Employees API!

Send an Authorization header to work with your own data
(any value works, it just identifies you):

  fetch(url, { headers: { Authorization: 'whatever-you-want' } })

Endpoints:

  GET    /employees
  POST   /employees  { employee_name, title, profile_image, text }
  DELETE /employees/:id
`)
})

// Everything below needs an Authorization header
app.use((req, res, next) => {
  const token = req.get('Authorization')
  if (!token) {
    res.status(403).json({
      error: 'Please provide an Authorization header to identify yourself (can be whatever you want)',
    })
    return
  }
  res.locals.token = token
  next()
})

app.get('/employees', (_req, res) => {
  res.json({ employees: employees.list(res.locals.token) })
})

app.post('/employees', (req, res) => {
  const { employee_name, title, profile_image, text } = req.body ?? {}
  if (!employee_name || !title) {
    res.status(400).json({ error: 'employee_name and title are required' })
    return
  }
  const employee = employees.add(res.locals.token, {
    employee_name,
    title,
    profile_image: profile_image ?? '',
    text: text ?? '',
  })
  res.status(201).json({ employee })
})

app.delete('/employees/:id', (req, res) => {
  const employee = employees.remove(res.locals.token, req.params.id)
  if (!employee) {
    res.status(404).json({ error: 'Employee not found' })
    return
  }
  res.json({ employee })
})
