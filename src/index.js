import { csvParse } from './csv-parser/index.js'

const csvUrl = new URL('../users.csv', import.meta.url)
const users = []

const usersRows = await csvParse(csvUrl, {
  skipFirstLine: true,
})

usersRows.forEach(userRow => {
  const [name, email, password, age] = userRow

  users.push({
    name,
    email,
    password,
    age,
  })
})

console.log(users)