import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import FruitPage from "./FruitPage";
import Main from "./pages/Main"

function App() {

  const fruit = [
    { id: 1, name: '사과', quantity: 2, isView: 1 },
    { id: 2, name: '바나나', quantity: 3, isView: 0},
    { id: 3, name: '포도', quantity: 5, isView: 1},
    { id: 4, name: '배', quantity: 10, isView: 1},
    { id: 5, name: '호박', quantity: 1, isView: 0}
  ];

  return (
    <>
    {
      fruit.map( 
        (item) => (
        <FruitPage
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          isView={item.isView}
        />
        )
      )
    }
    </>
  );
}

export default App;
