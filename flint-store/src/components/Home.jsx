import React from 'react'; 
import {Link} from 'react-router-dom';


const Home = () => {
  return(
    <div className="App">
        <h1><Link to='/lightandfire'>Fire and Light</Link></h1>
        <h1><Link to='/diy'>DIY</Link></h1>
        <h1><Link to='/weaponsandhunting'>Weapons and Hunting</Link></h1>
        <h1><Link to='/torchparty'>Torch Party</Link></h1>        
    </div>
  )
  
}

export default Home; 