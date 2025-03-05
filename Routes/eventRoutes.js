import express from 'express'
export const event = express()
event.use(express.json())
import { deleteEvent, getEvent, postEvent } from '../Controllers/eventControllers.js'

event.post('/event', postEvent)
event.get('/event/email', getEvent)
event.get('/event/email/:id', getEvent)
event.delete('/event/:id', deleteEvent)