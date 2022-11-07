import'./baki.css';
import {useLocation} from 'react-router-dom'
function  Baki(props) {
    const location = useLocation();
    console.log(location.state)
    
  return (
   <div className="uno">
     <div className="Carton">
      <img className='hanama' src={location.state.image} alt="" />
    </div>
    <div className="uma">
      <h1 className='yuji'> {location.state.title} </h1>
      <p>{location.state.description}</p>
      <h3 className='sa'>PREMIERE DATE April 11,2021</h3>
     <button className="one">Action</button>
     <button className="two">Animation</button>
     <button className="tree">Drama</button>
     <h2>ACTORS</h2>
     <li> {location.state.actor1}</li><hr className='ghuvi' />
     <li> {location.state.actor2}</li><hr  className='ghuvi'/>
     <li>{location.state.actor3}</li><hr  className='ghuvi'/><br />
     <button>Watch Now</button>
      </div>
      
   </div>
  );
}

export default  Baki;
