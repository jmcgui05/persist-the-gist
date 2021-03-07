import React from 'react';
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


const LoadFavorites = () => {
  const { data } = useQuery(FAVE_QUERY);
  console.log(data)
  return (
    <div>
      {data && (
        <>
          {data.favorite.map((link) => (
            <div>
            <h1>{link.gist_id}</h1> 
            <h1>{link.description}</h1>
            <h1>{link.created_at}</h1>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default LoadFavorites;