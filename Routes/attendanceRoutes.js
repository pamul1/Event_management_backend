import express from 'express'
export const attendance = express()
attendance.use(express.json())
import { getAttendance, postAttendance } from '../Controllers/attendanceControllers.js'

attendance.get('/:event_id', getAttendance)
attendance.post('/', postAttendance)