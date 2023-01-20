import FruitPage from "./FruitPage";
import { fruit } from "./datas/sampleDatas";
import { useState } from "react";

function App() {

  const myDate = fruit;

  const [cart, setCart] = useState ({
    name: "과일이름",
    quantity: 0
  });
  
  const addCart = () => {
    setCart({...cart, quantity: cart.quantity + 1, name: myDate[0].name})
  }    


  return (
    <>
      {myDate[0].name}
      <p>장바구니</p>
      <button onClick={addCart}>장바구니 담기</button>

      <div>
        <h3>내 장바구니</h3>
        <h4>상품명: {cart.name}</h4>
        <h4>수량: {cart.quantity}</h4>
      </div>
    </>
  );
}

export default App;
