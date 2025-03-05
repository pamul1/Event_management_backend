import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { user } from './Routes/userRoutes.js';
import { event } from './Routes/eventRoutes.js';
import { attendance } from './Routes/attendanceRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/user', user);
app.use('/event', event);
app.use('/attendance', attendance);

app.listen(3001, () =>
    console.log('Server running on port 3001'));