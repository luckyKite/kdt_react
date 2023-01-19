import Test from "./Test";

function App() {

  let number = 1;

  const increment = () => {
    number++;
    console.log(number);
  }

  const decrement = () => {
    number--;
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
