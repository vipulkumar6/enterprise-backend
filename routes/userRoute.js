import express from 'express';
import { login, register, contact } from '../controllers/userController.js';

const route = express.Router();

route.post('/register', register);
route.post('/login', login);
route.post('/contact', contact);

export default route;