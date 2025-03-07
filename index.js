import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { user } from './Routes/userRoutes.js';
import { event } from './Routes/eventRoutes.js';
import { attendance } from './Routes/attendanceRoutes.js';
import jwt from 'jsonwebtoken'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/user', user);

const tokenValidation =(req, res, next)=>{

    const authorization = req.headers['authorization']
    if (!authorization){
        return res.status(400).json({message : "You need to pass a Token"})
    }

    const token = authorization.replace('Bearer ', '');

    try {
        const secret = process.env.KEY_SECRET
        const decodeToken = jwt.verify(token, secret)
        next()
    }catch(err){
        console.log(err.message)
        return res.status(400).json({message : "Invalid Token"})
    }       
}

app.use('/', tokenValidation, event);
app.use('/attendance', tokenValidation, attendance);


app.post('/validateSesion', tokenValidation, (req, res) => {
    res.json({ message: "Valid Token"})
})

const port = process.env.PORT || 8080

app.listen(port);