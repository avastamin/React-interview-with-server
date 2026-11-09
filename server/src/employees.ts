export interface Employee {
  id: string
  employee_name: string
  title: string
  profile_image: string
  text: string
}

export type NewEmployee = Omit<Employee, 'id'> & { id?: string }

const defaultData: Employee[] = [
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

// One independent copy of the data per Authorization token
const db = new Map<string, Employee[]>()

function dataFor(token: string): Employee[] {
  let data = db.get(token)
  if (!data) {
    data = structuredClone(defaultData)
    db.set(token, data)
  }
  return data
}

export function list(token: string): Employee[] {
  return dataFor(token)
}

export function add(token: string, input: NewEmployee): Employee {
  const employee: Employee = { ...input, id: input.id ?? Math.random().toString(36).slice(-8) }
  dataFor(token).push(employee)
  return employee
}

export function remove(token: string, id: string): Employee | undefined {
  const data = dataFor(token)
  const index = data.findIndex((employee) => employee.id === id)
  if (index === -1) return undefined
  return data.splice(index, 1)[0]
}
