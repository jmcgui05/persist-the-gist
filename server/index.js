require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PORT } = process.env;
const { database } = require('./database');
const gistRoutes = require('./routes/gistRoutes');

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/gists', gistRoutes);

// handle unsupported
app.use((req, res) => {
  res.send({
    status: 404,
    body: `Unsupported path. We currently support the following paths: /gists/favorites, /gists/getGistById, /gists/getGistsByUser`
  })
});

database.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
})
