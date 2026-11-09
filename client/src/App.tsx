import { NavLink, Route, Routes } from 'react-router'
import Dashboard from './Dashboard.tsx'
import EmployeeList from './EmployeeList.tsx'

import './App.css'

export default function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Employees</NavLink>
        <NavLink to="/modal">Modal</NavLink>
      </nav>
      <Routes>
        <Route path="/modal" element={<Dashboard />} />
        <Route path="/" element={<EmployeeList />} />
      </Routes>
    </>
  )
}
