require('dotenv').config();
const express = require('express')
const bodyParser = require("body-parser");
const sequelize = require('./utils/db')
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors");
const authRouter = require('./routes/auth.routes')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: "*"
}));

app.use('/api/user', authRouter);

sequelize.sync({ force: false })
    .then(() => {
        app.listen(port, () => {
            console.log(`Server listening on http://localhost:${port}`)
        })
    })