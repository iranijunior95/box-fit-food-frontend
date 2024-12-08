import { useState } from 'react';
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

      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Fugit tenetur rerum consectetur, inventore voluptatem autem! 
      Eius ratione sapiente expedita odit quas 
      eligendi at voluptates quibusdam neque, voluptas eos rem autem.
      </p>
      <br />
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Fugit tenetur rerum consectetur, inventore voluptatem autem! 
      Eius ratione sapiente expedita odit quas 
      eligendi at voluptates quibusdam neque, voluptas eos rem autem.
      </p>
      <br />
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Fugit tenetur rerum consectetur, inventore voluptatem autem! 
      Eius ratione sapiente expedita odit quas 
      eligendi at voluptates quibusdam neque, voluptas eos rem autem.
      </p>
      <br />
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Fugit tenetur rerum consectetur, inventore voluptatem autem! 
      Eius ratione sapiente expedita odit quas 
      eligendi at voluptates quibusdam neque, voluptas eos rem autem.
      </p>
      <br />
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Fugit tenetur rerum consectetur, inventore voluptatem autem! 
      Eius ratione sapiente expedita odit quas 
      eligendi at voluptates quibusdam neque, voluptas eos rem autem.
      </p>
      <br />
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Fugit tenetur rerum consectetur, inventore voluptatem autem! 
      Eius ratione sapiente expedita odit quas 
      eligendi at voluptates quibusdam neque, voluptas eos rem autem.
      </p>
      <br />
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Fugit tenetur rerum consectetur, inventore voluptatem autem! 
      Eius ratione sapiente expedita odit quas 
      eligendi at voluptates quibusdam neque, voluptas eos rem autem.
      </p>
      <br />
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Fugit tenetur rerum consectetur, inventore voluptatem autem! 
      Eius ratione sapiente expedita odit quas 
      eligendi at voluptates quibusdam neque, voluptas eos rem autem.
      </p>
      <br />
    </>
  )
}

export default App
