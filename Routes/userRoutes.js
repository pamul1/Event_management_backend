import express from 'express';
export const user = express();
import { signIn, logIn } from '../Controllers/userControllers.js'

user.post('/register', signIn);
user.post('/logIn', logIn);