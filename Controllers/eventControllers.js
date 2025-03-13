import { db } from "../cn.js"

export const getEvent = async (req, res) => {
    
    const email = req.params.email
    const sql = `select id, title, to_char(date,'yyyy-mm-dd') date, location from events where email = $1`;
    const result = await db.query(sql, [email])
    res.status(200).json(result)

}

export const postEvent = async (req, res) => {

    const tmp = req.body

    if (!tmp.title) {
        res.status(300).json({ message: "Field title is empty" })
        return
    }

    if (!tmp.date) {
        res.status(300).json({ message: "Field date is empty" })
        return
    }

    if (!tmp.location) {
        res.status(300).json({ message: "Field location is empty" })
        return
    }

    if (!tmp.description) {
        res.status(300).json({ message: "Field description is empty" })
        return
    }

    if (!tmp.email) {
        res.status(300).json({ message: "Field email is empty" })
        return
    }

    try {
        const str = 'insert into events ( title, date, location, description, email) values ($1, $2, $3, $4, $5)'
        const arr = [tmp.title, tmp.date, tmp.location, tmp.description, tmp.email]
        const result = await db.query(str, arr)
        res.status(200).json({ message: "Event Added" })
        return
    } catch (err) {
        res.status(500).json({ message: err.message })
        return
    }

}

export const putEvent = async (req, res) => {

    const tmp = req.body
    const event_id = req.params.id

    if (!tmp.event_id) {
        res.status(300).json({ message: "Field event_id is empty" })
        return
    }

    if (!tmp.title) {
        res.status(300).json({ message: "Field title is empty" })
        return
    }

    if (!tmp.date) {
        res.status(300).json({ message: "Field date is empty" })
        return
    }

    if (!tmp.location) {
        res.status(300).json({ message: "Field location is empty" })
        return
    }

    if (!tmp.description) {
        res.status(300).json({ message: "Field description is empty" })
        return
    }

    if (!tmp.email) {
        res.status(300).json({ message: "Field email is empty" })
        return
    }

    try {
        const str = 'update from events set title = $1, date = $2, location = $3, descrition = $4, email = $5 where id = $6'
        const arr = [tmp.title, tmp.date, tmp.location, tmp.description, tmp.email, event_id]
        const result = await db.query(str, arr)
        res.status(200).json({ message: "Event Updated" })
        return
    } catch (err) {
        res.status(500).json({ message: err })
        return
    }
}

export const deleteEvent = async (req, res) => {

    const event_id = req.params.id

    if (!event_id) {
        res.status(300).json({ message: "Field event_id is empty" })
        return
    }

    try {
        const str = 'delete from events where id = $1'
        const arr = [event_id]
        const result = await db.query(str, arr)
        res.status(200).json({ message: "Event Deleted" })
        return
    } catch (err) {
        res.status(500).json({ message: err.message })
        return
    }

}