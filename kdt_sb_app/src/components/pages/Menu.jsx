import React from 'react';
import Title from '../ui/Title';
import MenuList from '../widgets/MenuList';
import MenuSearchBox from '../widgets/MenuSearchBox';
import withAuth from '../withAuth/withAuth';

function Menu() {
  return ( 
    <section>
      <Title 
        title="Menu"
        detail="Coffee Menu Lists"
        align="left"
        isView={true}
      />
      <MenuSearchBox />
      <MenuList />
    </section>

   );
}

export default withAuth(Menu);