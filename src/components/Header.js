import React from 'react';
import "./Header.css";
import icon_back from "../img/sharexpense_icon_back.png";
import { Link, useNavigate} from "react-router-dom";

const  Header = ({name, headercolor}) => {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <div className= {headercolor}>
        <div className='header_box'>      
            <div className='header-name'>{name}</div>
              <img className= "input_icon_back" src= {icon_back} alt="back" onClick={() => navigate(-1)}/>
              </div>
        </div>
        <div className='header-bottombox'></div>
    </div>
  )
}
export default Header
