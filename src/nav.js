import {Link} from 'react-router-dom'
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {filter} from "./Redux/reducer"
import {movie} from "./Redux/reducer"
import {setValue} from "./Redux/reducer"
import { useState } from 'react';

function Nav() {

  const dispatch = useDispatch()

   const list = []

   const filterList =(text)=> {
    if(text === "") dispatch(setValue())
    else dispatch(filter(text))

   }
    return (
      <div className="App">
        <div className='saitama'>
          <h3>Anime-Site</h3>
          <Link to="/"><h4 className='zupa'>Home</h4></Link> 
          <Link to="/About"><h4 className='zupa'>About</h4></Link> 
          <Link to="/Contact"><h4 className='zupa'>Contact</h4></Link> 
           <Link to="/Form"><button className='sultan'>Add</button></Link>
          <input 
          onChange={(e) => filterList(e.target.value)}
          type="text"
           placeholder='Filter Movie By Title' 
            className='pakpak'/>
          <button className='zuma'>SIGNIN</button>
        </div>
         
      </div>
    );
  }
  export default Nav