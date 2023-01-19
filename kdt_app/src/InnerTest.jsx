import React from 'react';

function InnerTest({innerTxt}) {
  return ( 
    <div>
      <p>TEST 안에 들어있는 컴포넌트로 사용할겁니다!</p>
      <p>{innerTxt}</p>
    </div>
   );
}

export default InnerTest;