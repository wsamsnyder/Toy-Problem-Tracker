require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.static('./dist'));

app.listen(port, () => console.log(`Listening on port ${port}`));