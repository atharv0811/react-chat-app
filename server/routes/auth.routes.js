import express from 'express'

const authRouter = express.Router();
import { signin, signup } from '../controllers/auth.controller.js'

authRouter.post('/signup', signup)
authRouter.post('/signin', signin)

export default authRouter;