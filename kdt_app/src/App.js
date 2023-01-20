import { useState } from "react";
import Lottie from 'react-lottie';

import * as animationData from './lego.json';
import Test from "./Test";

function App() {

  const [number, setNumber] = useState(0);

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const increment = () => {
    setNumber(number + 1);
    console.log(number);
  };

  const decrement = () => {
    setNumber(number - 1);
    console.log(number);
  };

  return (
    <div>
      <div>
        <Lottie options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
      <h1>{number}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <Test text = {number}/>
    </div>
  );
}

export default App;
