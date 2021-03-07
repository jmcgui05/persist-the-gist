require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PORT } = process.env;
const { database } = require('./database');
const { Gists } = require('./database');
const gister = require('./gistLibrary/theGister');

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/favorites', async (req, res) => {
  const data = await Gists.findAll();
  res.send(data);
});

app.get('/gistById/:id', async(req, res) => {
  const data = await gister.getGistById(req.params.id);
  res.send(data);
});

app.get('/gistsByUser/:username', async(req, res) => {
  const data = await gister.getGistsByUser(req.params.username);
  console.log(data);
  res.send(data);
});

app.post('/favorites', async(req, res) => {
  const { id, description, created_at, files } = req.body;
  const result = await Gists.create({id, description, created_at, files});
  console.log(result);
  res.send(result);
});

app.delete('/favorites/:id', async(req, res) => {
  const result = await Gists.destroy({
    where: {
      id: req.params.id
    }
  });
  console.log(result);
  res.end(result);
});


database.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
})
