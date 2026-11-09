# React interview with server

A small full stack project for live-coding interviews. React 19, TypeScript, Vite, React Router and Vitest on the client; Express and TypeScript on the server.

Each branch is a separate exercise. Check out the one you were given:

| Branch | Exercise |
| --- | --- |
| `main` | Finish the modal on `/modal`, then style the employee list on `/` to match `client/docs/mockup.png`. |
| `context-api-problem` | The theme switch on `/` does not work properly. Find out why and fix it. The chosen theme should apply across the whole app. |
| `fetching-data-from-api` | Load the employees from the server instead of the hardcoded array. Think about what the user sees while loading and when something goes wrong. |

Use whatever tools you normally use: browser DevTools, the terminal, documentation. Think aloud and ask questions.

## Running it

You need Node.js 22.12 or newer.

```bash
# terminal 1: the API (http://localhost:5001)
cd server
npm install
npm start

# terminal 2: the app (http://localhost:3000)
cd client
npm install
npm run dev
```

The `main` and `context-api-problem` exercises do not need the server. The `fetching-data-from-api` exercise does.

Useful scripts in `client/`:

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run typecheck` | Type-check with `tsc` |
| `npm run lint` | Lint with oxlint |
| `npm test` | Run Vitest |
| `npm run build` | Type-check and build for production |

## The API

Send an `Authorization` header with any value. It identifies you, and each value gets its own copy of the data.

| Method and path | Description |
| --- | --- |
| `GET /employees` | Returns `{ "employees": [...] }` |
| `POST /employees` | Adds an employee. Body: `employee_name`, `title`, `profile_image`, `text` |
| `DELETE /employees/:id` | Removes an employee |

The client reads the server address from `VITE_API_URL` (see `client/.env.example`) and defaults to `http://localhost:5001`.
