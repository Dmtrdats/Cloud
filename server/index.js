const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require("./routes/auth.routes")
const fileRouter = require("./routes/file.routes")
const app = express();
const PORT = config.get('serverPort')
const cors = require('./middleware/cors')

app.use (cors)
app.use (express.json())
app.use('/api/auth', authRouter)
app.use('/api/files', fileRouter)

const start = async() => {
    try {
        mongoose.connect(config.get('dbURL'));
        app.listen(PORT, () => {
            console.log('server listening on port ' + PORT);
        } )
    } catch (error) {
        
    }
}

start();