import React from 'react';

import './Hostname.css';

function Hostname({ names }) {
  const nameArray = names.split(" ");

  return (
    <div className="name">
      <p className="hostname">
        <span>{ nameArray[0] }</span><br />
        <span>{ nameArray[1] }</span>
      </p>
      </div>
  );
}

export default Hostname;