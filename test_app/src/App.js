import React, { useState, useEffect, useMemo } from 'react';
import './App.css';


const bigProcess = (number) => {  
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  console.log('bigProcess');
  return 100000 + number;
}

const smallProcess = (number) => {
  let sum = 0 ;
  for (let i = 0; i < 10; i++) {
    sum += i;
  }
  console.log('smallProcess');
  return number;
}

function App() {

  const [number, setNumber] = useState(0);
  const [bigNumber, setBigNumber] = useState(0);

  // const bigSum = bigProcess(bigNumber);
  const bigSum = useMemo(()=>{
    return bigProcess(bigNumber);
  },[bigNumber]);
  const smallSum = smallProcess(number);


  return (
      <div className="App">
        <h2>BigProcess: {bigSum}</h2>
        <h2>SmallProcess: {smallSum}</h2>
        <button onClick={()=>setBigNumber(bigNumber+1)}>bigProcess</button>
        <button onClick={()=>setNumber(number+1)}>smallProcess</button>
      </div>
    
  );
}

export default App;
