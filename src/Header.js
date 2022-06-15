import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    
    <div className='header'>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='amazon'/>
      <div className='header__search'>
          <input className='header__searchInput' type='text'/>
          <span class="material-symbols-outlined">search</span>
         
      </div>
      <div className='header__nav'>
        <div className='header__option'>
            <span className='header__optionLineOne'> Hello Guest</span>
            <span className='header__optionLineTwo'> Sign In</span>
        </div>
        <div className='header__option'>
            <span className='header__optionLineOne'> Returns</span>
            <span className='header__optionLineTwo'> & Orders</span>
        </div>
        <div className='header__option'>
            <span className='header__optionLineOne'> Your</span>
            <span className='header__optionLineTwo'> Prime</span>
        </div>
      </div>
    </div>
    
    

  )
}

export default Header
