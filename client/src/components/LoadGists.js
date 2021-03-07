import React, { useState } from 'react';
import { useMutation, gql, useQuery, useLazyQuery } from '@apollo/client';

const GET_GISTS_BY_USERNAME = gql`
    {
      gistsByUser(username:$username) {
        gist_id, files, created_at
      }
    }
  `;

const GET_GIST_BY_ID = gql`
  {
    gistById(id:$id) {
      url
    }
  }
`;


const LoadGists = () => {

  const [userName, setUsername] = useState('');
  const [getUserGists] = useLazyQuery(GET_GISTS_BY_USERNAME, {
    variables: {
      username: userName
    }
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getUserGists();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            defaultValue={userName}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            type="text"
            placeholder="A username for gists"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );


}

export default LoadGists;