 import './App.css';
 import About from './About'
 import Contact from './Contact'
import Card from './card';
import Nav from './nav';
import Baki from './Baki';
import Form from './form'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { useState } from 'react';

function App(props) {
  

  return (
    <div className="App">
      
       <BrowserRouter>
       <Nav/>
       <Routes>
       <Route path="/" element={<Card/>}/>  
        <Route path="/Baki" element={<Baki/>}/>
        <Route path="/About" element={<About/>}/>  
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Form" element={<Form/>}/>
      </Routes>
       </BrowserRouter>

     
    </div>
  );
}

export default App;
