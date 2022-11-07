import { useState } from "react";
import {add} from "./Redux/reducer"
 
import { useDispatch } from "react-redux";
 function Form (){
   const dispatch = useDispatch()
   const [addmovie, setState] = useState({
      title: "",
      description : "",
      image: "",
      actor1: "",
      actor2: "",
      actor3: ""
   })
    return(
        <div className='youga'>
           <input type="text" placeholder='title' onChange={(e) =>setState({...addmovie, title : e.target.value}) } /> 
           <input type="text" placeholder='description'  onChange={(e) =>setState({...addmovie, description : e.target.value}) } /> 
           <input type="text" placeholder=' image '  onChange={(e) =>setState({...addmovie, image  : e.target.value}) } /> 
           <input type="text" placeholder="actor 1" onChange={(e) =>setState({...addmovie,  actor1 : e.target.value}) } /> 
           <input type="text" placeholder="actor 2" onChange={(e) =>setState({...addmovie, actor2  : e.target.value}) } />
           <input type="text" placeholder="actor 3" onChange={(e) =>setState({...addmovie, actor3  : e.target.value}) } />
            <button 
             onClick={() =>dispatch(add(addmovie))}
            className='ghuvizo'>Add</button> 
             </div>
    )
 }
 export default Form;