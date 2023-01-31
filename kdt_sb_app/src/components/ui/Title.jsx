import React from 'react';

function Title({title, detail, align, isView}) {
  if(!isView) return null
  return (
    <div style={{textAlign: align}}>
      <h2>{title}</h2>
      <p>{detail}</p>
    </div>
  );
}

export default Title;