import express from 'express';
import AuthController from '../controllers/AuthController';
import TokenMiddlewares from '../middlewares/TokenMiddleware';
import UserController from '../controllers/UserController';

const router = express.Router();

export default router;

router.post('/signin', AuthController.signin);

router.post('/signup', AuthController.signup);

router.get('/protected', TokenMiddlewares.authenticate, UserController.open);
