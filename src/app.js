const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/emailwewantya');

app.use(express.urlencoded());
app.use(express.json());

const studentemailRoute = require(`./routes/studentemailRoute`);

app.use('/', studentemailRoute);

app.listen(port, () => {
  console.log(`Exemple app listening on port ${port}`)
});