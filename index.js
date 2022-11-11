const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

//MiddleWare
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Dental Care Services Server is Running');
})

app.listen(port, () => {
    console.log(`Dental Care Services Running on: ${port}`);
})
