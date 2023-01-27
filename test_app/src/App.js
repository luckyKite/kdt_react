import './App.css';
import { useEffect, useState } from 'react';
import Test from './Test';
import Price from './Price';

import { DataContext } from './DataContext';

function App() {

  const [data, setData] = useState(0);
  const [price, setPrice] = useState(100);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect( ()=> {
    setTotalPrice(data*price)
  },[price, data])


  return (
    <DataContext.Provider value={{data, setData, price, setPrice, totalPrice, setTotalPrice}}>
      <div className="App">
        <h1>total: {totalPrice}</h1>
        <h1>qty: {data}</h1>
        <Test />
        <Price />
      </div>
    </DataContext.Provider>
  );
}

export default App;
