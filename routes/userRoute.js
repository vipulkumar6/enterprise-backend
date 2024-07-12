import express from 'express';
import { login, register, contact, getUsers, getById } from '../controllers/userController.js';

const route = express.Router();

route.post('/register', register);
route.post('/login', login);
route.post('/contact', contact);
route.get('/getuser', getUsers);
route.get('/getuser/:id', getById);

export default route;