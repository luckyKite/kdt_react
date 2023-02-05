import React, {useState, useEffect} from 'react';
import { menuCategory } from '../../data/menuCategory';

function MenuCategoryList({isActive}) {

  const [searchList, setSearchList] = useState([1,2,3]);

  const handleCheck = (e) => {
    console.log(e.target.checked)
    setSearchList(
      {...searchList, [e.target.value]: e.target.checked}
    )
  }

  useEffect(() => {
    console.log(searchList)
  },[searchList])


  if(!isActive) return null;
  return ( 
    <div>
      <form>
        <input type='checkbox'/>
        <label>전체 상품 보기</label>
        {
          menuCategory.map( item => (
            <div key={item.id}>
            <input type='checkbox' value={item.id} onChange={handleCheck}/>
            <label>{item.title}</label>
            </div>
          ))
        }
      </form>
    </div>
  );
}

export default MenuCategoryList;