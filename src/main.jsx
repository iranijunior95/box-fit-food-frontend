import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx';
import Home from './telas/Home/index.jsx';
import Produtos from './telas/Produtos/index.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
