 import Carditem from "./carditem";
 import {useSelector} from "react-redux"
  function Card(props) {

    const list = useSelector((state)=> state.filters.movie)
 
  return (
    <div className="App">
      <div className='anime'>
        {list.map(movie =>
        (
         <Carditem list_film={movie}/>
        )
        )}

      </div>
    </div>
  );}
  export default Card 