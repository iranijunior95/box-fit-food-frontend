import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import './App.css'

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function clickOpenMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <>
      <Header 
        isOpenMenu={isOpenMenu}
        clickOpenMenu={clickOpenMenu}
      />

      <Menu
        isOpenMenu={isOpenMenu} 
      />
    
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default App
