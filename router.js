import UserController from './controllers/userController.js';
import UserAuth from './controllers/authentication/userAuth.js';
import authenticate from './middleware/authenticate.js';

import express from 'express';
const router = express.Router();

// GATAU
router.get('/user', UserController.get);
router.get('/user/:id', UserController.detail);
router.post('/user', UserController.store);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.delete);

// Authentication
router.post('/user/login', UserAuth.login);
router.post('/user/me',authenticate, UserAuth.me);

export default router;
