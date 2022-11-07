import {Link} from 'react-router-dom'


function  Carditem({list_film}) {
  
    return(
        <div className='card'>
        <img src={list_film.image} alt="" />
        <div className='ufo'> 
        <h4>{list_film.title}</h4>
        <h4>{list_film.description}</h4>
        </div>
       <Link to = "/Baki"
        state = {list_film}>
          <button className='yuri'>Watch Now</button></Link>
      </div>

    )
      }
      export default Carditem