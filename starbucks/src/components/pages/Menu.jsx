import React, { useEffect, useState } from 'react';
import MenuList from '../ui/menu/MenuList';
import style from './Menu.module.css';

function Menu() {
  const [menu, setMenu] = useState();

  useEffect(() => {
    fetch(`http://localhost:3001/menu`)
      .then(res => res.json())
      .then(data => {
        setMenu(data);
      })
  }, []);

  return (
    <div className={style.drink}>
      <h1>음료</h1>
      <div className={style.choice}>
        <ul className={style.menuList}>
          {
            menu && menu.map((item, idx) =>
              <MenuList menu={item} key={idx} />
            )
          }
        </ul>
      </div>
    </div>
  );
}

export default Menu;