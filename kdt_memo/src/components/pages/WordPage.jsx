import React from 'react';
import { useParams } from 'react-router-dom';
import MainTable from '../ui/MainTable';

function WordPage() {

  const { dayId } = useParams();

  return ( 
    <div className="container mt-5">
      <h1>Day : {dayId}</h1>
      <MainTable 
        dayId={dayId}
      />
    </div>
  );
}

export default WordPage;