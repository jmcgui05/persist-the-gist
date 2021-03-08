import React, { useEffect, useState } from 'react';
import APIInstance from '../api';
const [faveList, setFavelist] = useState([]);

useEffect(() => {
  const result = APIInstance.getFavorites();
  console.log(result);
  setFavelist(result.data);
})

const FavoriteList = () => {
  return (
    <div>
      {faveList && faveList.length(
        <>
          {data.map((fave) => (
            <div>
            <h1>{fave.id}</h1> 
            <h1>{fave.description}</h1>
            <h1>{fave.created_at}</h1>
            {/* // <Gist key={fave.id} fave={fave} /> */}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FavoriteList;