import { db } from "../cn.js"

export const getAttendance = async (req, res) => {

    const event_id  = req.params.event_id
    const sql = "select attendee_name, to_char(attendance_date,'yyyy-mm-dd') attendance_date , id  from attendance where event_id  = $1"
    const result = await db.query(sql, [event_id])
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

    if (!tmp.event_id) {
        res.status(300).json({ message: "Field event_id is empty" })
        return
    }

    try {
        const str = 'insert into attendance (event_id, attendee_name, attendance_date) values ($1, $2, $3)'
        const arr = [tmp.event_id, tmp.name, tmp.date ]
        const result = await db.query(str, arr)
        res.status(200).json({ message: "Attendance Added" })
        return
    } catch (err) {
        res.status(500).json({ message: err.message})
        return
    }

}