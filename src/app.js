const express = require('express');
require('dotenv').config();
const app = express();
const port = 3006;

const mongoose = require('mongoose');

const cors = require('cors');

app.use(cors());


// mongoose.connect(process.env.MONGODB_URL);
mongoose.connect('mongodb://wewantya-mongodb/emailwewantya');

app.use(express.urlencoded());
app.use(express.json());

const studentemailRoute = require(`./routes/studentemailRoute`);
const startupemailRoute = require(`./routes/startupemailRoute`);

app.use('/', studentemailRoute);
app.use('/', startupemailRoute);

app.listen(port, () => {
  console.log(`Exemple app listening on port ${port}`)
});