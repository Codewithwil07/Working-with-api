import UserController from './controllers/userController.js';
import UserAuth from './controllers/authentication/userAuth.js';
import express from 'express';
const router = express.Router();

// GATAU
router.get('/users', UserController.get);
router.get('/users/:id', UserController.detail);
router.post('/users', UserController.store);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

// Authentication
router.post('/users/login', UserAuth.login);

export default router;
