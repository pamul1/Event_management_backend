import pg from 'pg-promise'
import dotenv from 'dotenv'
dotenv.config()

const pgc = pg()
const str = process.env.DATABASE_URL

export const db = pgc(str)

db.connect()
.then(() => {
console.log("Success Connection")
})
.catch((err) => {
console.log(` Error Connection ${err} `)
})