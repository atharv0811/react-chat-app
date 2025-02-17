import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRouter from './routes/auth.routes.js';
import dbConnect from './utils/db.js';

dotenv.config();

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: "*"
}));

dbConnect()

app.use('/api/user', authRouter);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})