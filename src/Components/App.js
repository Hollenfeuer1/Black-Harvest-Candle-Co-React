import React from 'react';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopProvider from '../Context/shopContext';
import '../Style.css';
import Home from '../Pages/Home';
import ProductList from '../Pages/ProductList';
import ProductPage from '../Pages/ProductPage';
import AboutUs from '../Pages/AboutUs';
import ContactUs from '../Pages/ContactUs';
import Navbar from '../Components/Navbar';
import Cart from '../Components/Cart';

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

function App() {
  return (
    <div>
      <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <BrowserRouter>
        <Navbar />
        <Cart />
          <Routes>
            <Route path='/' element={<App />} />
            <Route index element={<Home />} />
            <Route path='product-list' element={<ProductList />} />
            <Route path='product/:id' element={<ProductPage />} />
            <Route path='about-us'element={<AboutUs />} />
            <Route path='contact-us' element={<ContactUs />} />
            <Route path='*' element={
              <p>404 ERROR</p>
            } />
          </Routes>
      </BrowserRouter>
      </StyletronProvider>
      </ShopProvider>
    </div>
  );
}

export default App;
