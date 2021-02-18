import React from "react";

import styles from './Employee.module.css'

const users = [
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
];
class Employee extends React.Component {
  // TODO:: Call this REST API to get list of employees
  // http://dummy.restapiexample.com/api/v1/employees
  render() {
    return (
      <main className={styles.main}>
        <h1>List of Employee</h1>
        <ul className={styles.Employees}>
          {users.map((user) => {
            return <li className={styles.Employee}>
              <div className={styles.Image}>
                <img src={user.profile_image} alt="Employee Name" />
              </div>
              <div>
                <span>{user.employee_name}</span>
                <p><span>{user.title}</span>{user.text}</p>
              </div>
            </li>;
          })}
        </ul>
      </main>
    );
  }
}

export default Employee;
