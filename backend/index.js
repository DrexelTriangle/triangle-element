const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const router = require('./routes/router');

const app = express();
const port = 3306;
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors(corsOptions));
app.use('/', router);


const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});