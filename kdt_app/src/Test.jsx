import React from 'react';
import InnerTest from './InnerTest';

const Test = ({text}) => {
  
  return ( 
    <div>
      <h1>{text} 값이 표현됩니다.</h1>
      <InnerTest innerTxt = {text}/>
      <InnerTest innerTxt = "ABCD"/>
    </div>
  );
}

export default Test;