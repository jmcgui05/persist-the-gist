const axios = require('axios');

async function getGistsByUser(username) {
  let res = await axios.get(`https://api.github.com/users/${username}/gists`);
  let data = res.data;
  console.log(data);
};

async function getGistById(id) {
  let res = await axios.get(`https://api.github.com/gists/${id}`);
  let data = res.data;
  console.log(data);
}

// getGistsByUser("jthomasmock");
// getGistById("891efa58b90c1797d8c35fdac7b01f52");

module.exports = {
  getGistsByUser,
  getGistById
}