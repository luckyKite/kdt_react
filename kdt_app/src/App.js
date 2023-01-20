import Sample from "./Sample";
import React, { useState } from 'react';


function App() {

  const [name, setName] = useState("JASON");

  return (
    <>
      <Sample name = {name}>Name</Sample>
    </>
  );
}

export default App;
