import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Main from "./pages/Main"

function App() {

  const fruit = ['apple', 'mango', 'banana', 'melon'];

  return (
    <>
    {
      fruit.map( fruit => (
        <p>{fruit}</p>
      )

      )
    }
    </>
  );
}

export default App;
