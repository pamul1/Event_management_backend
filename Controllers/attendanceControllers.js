import { db } from "../cn.js"

export const getAttendance = async (req, res) => {

    const sql = "select name, to_char(date,'yyyy-mm-dd') date , attendance_id  from attendance"
    const result = await db.query(sql)
    res.status(200).json(result)

}

export const postAttendance = async (req, res) => {

    const tmp = req.body

    if (!tmp.name) {
        res.status(300).json({ message: "Field name is empty" })
        return
    }

    if (!tmp.date) {
        res.status(300).json({ message: "Field date is empty" })
        return
    }

    try {
        const str = 'insert into attendance (event_id, name, date,) values ($1, $2, $3)'
        const arr = [tmp.name, tmp.date, event_id]
        const result = await db.query(str, arr)
        res.status(200).json({ message: "Attendance Added" })
        return
    } catch (err) {
        res.status(500).json({ message: err.message})
        return
    }

}