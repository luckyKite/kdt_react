import React from 'react';
import MenuList from '../../widgets/MenuList';
import MenuSearchBox from '../../widgets/MenuSearchBox';
import Title from '../ui/Title';

function Menu() {
  return (
    <section>
      <Title 
        title="Menu"
        detail="Coffee Menu Lists"
        align="right"
        isView={false}
      />
      <MenuSearchBox />
      <MenuList />
    </section>
    
  );
}

export default Menu;