import Sample from "./Sample";
import React, { useEffect, useState } from 'react';


function App() {

  const [카드명세, 아빠카드] = useState("")
  useEffect( () => {
    아빠카드("카드 사용 준비가 되었습니다.")
  },[]);

  return (
    <>
      <Sample 
      카드명세 = {카드명세}
      아빠카드 = {아빠카드}/>
      <h2>아빠 핸드폰 : {카드명세}</h2>
    </>
  );
}

export default App;
