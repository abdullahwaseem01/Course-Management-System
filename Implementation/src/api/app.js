require('./database/database.js');
const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const registerRoutes = require('./routes/register.js');
const loginRoutes = require('./routes/login.js');
const viewRoutes = require('./routes/view.js');
const changeInformationRoutes = require('./routes/changeinformation.js');
const backupRoutes = require('./backups/managebackups.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(registerRoutes);
app.use(loginRoutes);
app.use(viewRoutes);
app.use(changeInformationRoutes);
app.use(backupRoutes);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

