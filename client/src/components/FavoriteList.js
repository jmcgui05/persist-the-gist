import React from 'react';
import Gist from './Gist';
import { useQuery, gql } from '@apollo/client';

const FAVE_QUERY = gql`
  {
    favorite{
      description,
      created_at,
      gist_id,
      files
    }
  }
`;


const FavoriteList = () => {
  const { data } = useQuery(FAVE_QUERY);
  console.log(data)
  return (
    <div>
      {data && (
        <>
          {data.favorite.map((fave) => (
            <div>
            <h1>{fave.gist_id}</h1> 
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