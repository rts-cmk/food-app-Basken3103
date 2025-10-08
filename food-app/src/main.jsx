import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App.jsx';
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import Profile from './pages/Profile.jsx'
import './styles/globals.css'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="product" element={<Product/>} />
      <Route path="profile" element={<Profile />} /> 
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
