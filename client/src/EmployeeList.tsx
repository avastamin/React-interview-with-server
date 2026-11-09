import type { Employee } from './types.ts'

import styles from './EmployeeList.module.css'

const users: Employee[] = [
  {
    id: '1',
    employee_name: 'Tiger Nixon',
    title: 'Brunch this weekend?',
    profile_image: '/avatars/1.svg',
    text: "I'll be in your neighborhood doing errands this",
  },
  {
    id: '2',
    employee_name: 'Garrett Winters',
    title: 'Summer BBQ',
    profile_image: '/avatars/2.svg',
    text: "Wish I could come, but I'm out of town this",
  },
  {
    id: '3',
    employee_name: 'Ashton Cox',
    title: 'Oui Oui',
    profile_image: '/avatars/3.svg',
    text: 'Do you have Paris recommendations? Have you ever',
  },
]

export default function EmployeeList() {
  return (
    <main className={styles.main}>
      <h1>List of Employee</h1>
      <ul className={styles.Employees}>
        {users.map((user) => {
          return (
            <li className={styles.Employee} key={user.id}>
              <div className={styles.Image}>
                <img src={user.profile_image} alt={user.employee_name} />
              </div>
              <div>
                <span>{user.employee_name}</span>
                <p>
                  <span>{user.title}</span>
                  {user.text}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
