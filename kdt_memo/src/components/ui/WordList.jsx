import React from 'react';

import Forms from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function WordList({word, isCheck, setIsCheck}) {
  
  const [isView, setIsView] = useState(false);

  const handleView = () => {
    setIsView(!isView);
  }

  const handleCheck = () => {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        ...word,
        isDone: !word.isDone
      })
    }).then(res => {
      console.log(res)
      if(res.ok) {
        setIsCheck(!isCheck);
      }
    })
  }

  return ( 
    <tr key={word.id}>
      <td>{word.id}</td>
      <td>
        <Forms>
          <Forms.Check 
            type="checkbox" 
            defaultChecked={word.isDone} 
            disabled={word.isDone}
            onChange={handleCheck} 
          />
        </Forms>
      </td>
      <td>{word.eng}</td>
      <td>{isView ? word.kor : ""}</td>
      <td>
        <Button variant="primary" onClick={handleView}>{isView? "감추기" : "답 보기"}</Button>{' '}
        <Button variant="secondary">삭제</Button>
      </td>
    </tr>  

   );
}

export default WordList;