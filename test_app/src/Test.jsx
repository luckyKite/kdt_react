import React, { useContext } from 'react';
import { DataContext } from './DataContext';

function Test({data, setData}) {

  const conData = useContext(DataContext);

  return (
    <>
      <button onClick={() => conData.setData(conData.data +1)}>incre</button>
      <button onClick={() => conData.setData(conData.data -1)}>decre</button>
    </>
  
  );
}

export default Test;