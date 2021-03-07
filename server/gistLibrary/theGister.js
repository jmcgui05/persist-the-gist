const axios = require('axios');

// GET all gists by username. Example: jthomasmock
async function getGistsByUser(username) {
  try {
    let res = await axios.get(`https://api.github.com/users/${username}/gists`);
    let data = res.data;
    return data;
  } catch(err) {
    console.log(`Error getting gist by user: ${err.message}`);
  }
};

// GET gist by id. Example: 891efa58b90c1797d8c35fdac7b01f52
async function getGistById(id) {
  const gistIdUrl = `gists/${id}`;
  try {
    let res = await axios.get(`https://api.github.com/gists/${id}`);
    let data = res.data;
    return data;
  } catch(err) {
    console.log(`Error getting gist by id: ${err.message}`);
  }
};

module.exports = {
  getGistsByUser,
  getGistById
}