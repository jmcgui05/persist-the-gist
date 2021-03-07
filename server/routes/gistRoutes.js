const express = require('express');
const router = express.Router();
const { Gists } = require('../database');
const gister = require('../gistLibrary/theGister');

router.get('/favorites', async (req, res) => {
  const data = await Gists.findAll();
  res.send(data);
});

router.get('/gistById/:id', async(req, res) => {
  const data = await gister.getGistById(req.params.id);
  res.send(data);
});

router.get('/gistsByUser/:username', async(req, res) => {
  const data = await gister.getGistsByUser(req.params.username);
  console.log(data);
  res.send(data);
});

router.post('/favorites', async(req, res) => {
  const { id, description, created_at, files } = req.body;
  const result = await Gists.create({id, description, created_at, files});
  console.log(result);
  res.send(result);
});

router.delete('/favorites/:id', async(req, res) => {
  const result = await Gists.destroy({
    where: {
      id: req.params.id
    }
  });
  console.log(result);
  res.end(result);
});

module. exports = router;