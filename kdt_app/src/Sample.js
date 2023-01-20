import React from 'react';

function Sample(props) {
  console.log(props)
  return (
    <>
      <h2>{props.name}</h2>
      <h3>{props.children}</h3>
    </>
  );
}

export default Sample;