import {useState} from 'react';

function App() {

  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number+1);
    console.log(number);
  }

  const decrement = () => {
    setNumber(number-1);
    console.log(number);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
