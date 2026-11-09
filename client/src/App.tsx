import { NavLink, Route, Routes } from 'react-router'
import ContextPlayground from './ContextPlayground.tsx'
import Dashboard from './Dashboard.tsx'
import EmployeeList from './EmployeeList.tsx'
import AppProvider from './theme/AppProvider.tsx'

import './App.css'

export default function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Theme</NavLink>
        <NavLink to="/employee">Employees</NavLink>
        <NavLink to="/modal">Modal</NavLink>
      </nav>
      <Routes>
        <Route path="/modal" element={<Dashboard />} />
        <Route path="/employee" element={<EmployeeList />} />
        <Route
          path="/"
          element={
            <AppProvider>
              <ContextPlayground />
            </AppProvider>
          }
        />
      </Routes>
    </>
  )
}
