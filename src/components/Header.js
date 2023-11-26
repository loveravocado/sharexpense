import React from 'react';
import "./Header.css";

const  Header = ({name}) => {
  return (
    <div className='header'>
        <div className='header-box'>
            <div className='header-name'>{name}</div>
        </div>
    </div>
  )
}
export default Header
