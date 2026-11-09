import { app } from './app.ts'

const port = Number(process.env.PORT) || 5001

app.listen(port, () => {
  console.log(`Server listening on port ${port}, Ctrl+C to stop`)
})
