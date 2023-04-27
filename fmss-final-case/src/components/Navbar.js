import React from 'react'
import "./style.css";
import StarwarsLogo from '../images/Star_Wars_Logo.svg';
import { useStarwars } from '../contexts/StarwarsContext';

function Navbar() {
  const {search,setSearch,setIsClicked}=useStarwars();
  return (
    <div className='nav-container'>
      <div className="logo">
        <img src={StarwarsLogo} alt="Star Wars Logo" />
      </div>
      <div className="search">
        <label > Name / Model </label>
        <input 
          type="text" 
          placeholder='Enter a name or model' 
          value={search} 
          onChange={e=>setSearch(e.target.value)}
        />
        <button onClick={()=>{setIsClicked(true);}}><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
  )
}

export default Navbar