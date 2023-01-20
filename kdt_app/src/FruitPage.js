import React from "react";

function FruitPage({name, quantity}) {

  console.log(name, quantity);
  return (
    <div>
      <h2>과일이름 : {name}</h2>
      <h3>개수 : {quantity}</h3>

    </div>

  );
}

export default FruitPage;