import React from 'react';

const Gist = (props) => {
  const { gistObj } = props;
  return (
    <div>
      <div>
        {gistObj.gist_id} {gistObj.created_at} {gistObj.files}
      </div>
    </div>
  );
};

export default Gist;