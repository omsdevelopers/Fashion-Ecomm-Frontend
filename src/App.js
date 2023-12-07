import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'; // Fix the import statement
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Header from './components/Header';
import Shop from './components/Shop';

import '@fortawesome/fontawesome-svg-core/styles.css';
import Login from './components/Login';
import Dash from './components/Dash';
import Footer from './components/Footer';





function App() {
  return (
    <>
      <BrowserRouter>
      <Header></Header>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Login" element={<Login />} />
          <Route path="dash" element={<Dash />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
