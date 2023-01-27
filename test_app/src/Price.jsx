import React, { useContext } from 'react';
import { DataContext } from './DataContext';

function Price() {
  
  const conData = useContext(DataContext);

  return (
    <>
      <h2>Price : {conData.price} X Qty : {conData.data}</h2>
    </>
  );
}

export default Price;