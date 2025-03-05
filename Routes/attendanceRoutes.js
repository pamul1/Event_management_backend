import express from 'express'
export const attendance = express()
attendance.use(express.json())
import { getAttendance, postAttendance } from '../Controllers/attendanceControllers.js'

attendance.get('/', getAttendance)
attendance.post('/', postAttendance)