import axios from 'axios';
const REACT_APP_API_URL = 'http://localhost:4000/gists';

// const APIInstance = {
//   getFavorites: async () => {
//     try {
//       const data = await axios.get(`${REACT_APP_API_URL}/favorites`);
//       console.log(data);
//       return data;
//     } catch(err) {
//       console.log(`Error getting favorites: ${err.message}`);
//     }
//   },
//   getGistById: async (id) => {
//     try {
//       const data = await axios.get(`${REACT_APP_API_URL}/gists/gistById/${id}`);
//       console.log(data);
//       return data;
//     } catch(err) {
//       console.log(`Error getting gist by id: ${err.message}`);
//     }
//   },
//   getGistsByUser: async (username) => {
//     try {
//       const data = await axios.get(`${REACT_APP_API_URL}/gists/gistsByUser/${username}`);
//       console.log(data);
//       return data;
//     } catch(err) {
//       console.log(`Error getting gists by username: ${err.message}`);
//     }
//   },
//   addFavorite: async (fave) => {
//     const { id, description, created_at, files } = fave;
//     try {
//       const data = await axios.post(`${REACT_APP_API_URL}/gists/favorites`, {
//         id,
//         description, 
//         created_at, 
//         files
//       });
//       console.log(data);
//       return data;
//     } catch(err) {
//       console.log(`Error adding favorite: ${err.message}`);
//     }
//   },
//   deleteFavorite: async (id) => {
//     try {
//       const data = await axios.delete(`${REACT_APP_API_URL}/gists/favorites/${id}`);
//       console.log(data);
//       return data;
//     } catch(err) {
//       console.log(`Error deleting favorite: ${err.message}`);
//     }
//   }
// }

async function getFavorites() {
  try {
    const data = await axios.get(`${REACT_APP_API_URL}/favorites`);
    console.log(data);
    return data;
  } catch(err) {
    console.log(`Error getting favorites: ${err.message}`);
  }
};

async function getGistById(id) {
  try {
    const data = await axios.get(`${REACT_APP_API_URL}/gistById/${id}`);
    console.log(data);
    return data;
  } catch(err) {
    console.log(`Error getting gist by id: ${err.message}`);
  }
};

async function getGistsByUser(username) {
  try {
    const data = await axios.get(`${REACT_APP_API_URL}/gistsByUser/${username}`);
    console.log(data);
    return data;
  } catch(err) {
    console.log(`Error getting gists by username: ${err.message}`);
  }
};

async function addFavorite(fave) {
  const { id, description, created_at, files } = fave;
  try {
    const data = await axios.post(`${REACT_APP_API_URL}/gists/favorites`, {
      id,
      description, 
      created_at, 
      files
    });
    console.log(data);
    return data;
  } catch(err) {
    console.log(`Error adding favorite: ${err.message}`);
  }
};

async function deleteFavorite(id) {
  try {
    const data = await axios.delete(`${REACT_APP_API_URL}/gists/favorites/${id}`);
    console.log(data);
    return data;
  } catch(err) {
    console.log(`Error deleting favorite: ${err.message}`);
  }
};

export default {
  getFavorites,
  getGistById,
  getGistsByUser,
  addFavorite,
  deleteFavorite
}