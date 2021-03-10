import React, { useEffect, useState } from 'react';
import APIInstance from '../api';

const FavoriteList = () => {
  const [faveList, setFavelist] = useState([]);
  const [userGists, setUserGists] = useState([]);

  useEffect(() => {
    async function fetchFaves() {
      let result = await APIInstance.getFavorites();

      setFavelist(result.data);
    } 
    fetchFaves();
  }, []);

  
  async function handleGistsByUser(e) {
    console.log(e.target.value);
    if (e.target.value.length > 3) {
      const result = await APIInstance.getGistsByUser(e.target.value);
      console.log(result);
      if (result.data && result.data.length > 0) {
        setUserGists(result.data);
      }
    }
    return;
  }

  if (!faveList.length) {
    return null;
  }

  return (
    <div style={{"display":"flex", "justifyContent": "space-between"}}>

        <div style={{"width": "50vw", "overflowWrap": "anywhere"}}>
        <h1>Favorite List</h1>
          {faveList.map((fave) => (
            <div key={fave.id}>
            <h1>{fave.id}</h1> 
            <h1>{fave.description}</h1>
            <h1>{fave.created_at}</h1>
            </div>
          ))}
        </div>
        <div style={{"width": "50vw"}}>
          <p>hello</p>
          <input
            type="text"
            placeholder="username"
            onChange={handleGistsByUser}
          >
          </input>
          {userGists.map((gist) => (
            <div key={gist.id}>
            <h1>{gist.created_at}</h1> 
            <h1>{gist.description}</h1>
            </div>
          ))}
        </div>
    </div>
  );
};

export default FavoriteList;