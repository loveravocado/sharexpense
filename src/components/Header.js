import React from 'react';
import "./Header.css";
import icon_back from "../img/sharexpense_icon_back.png";
import { Link, useNavigate} from "react-router-dom";
import Hearup from '../animation/Hearup';
import { motion } from 'framer-motion';
import { auth } from '../firebase';


const  Header = ({name, headercolor}) => {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <motion.div className= {headercolor} initial={{height: "90vh", bottom: 0}} animate={{height: "25vh"}} >
        <div className='header_box'>
          <Link to="../"><div className='home_signout' onClick={() => auth.signOut()}>Log out</div></Link>   
            <div className='header-name'>{name}</div>
              <img className= "input_icon_back" src= {icon_back} alt="back" onClick={() => navigate(-1)}/>
        </div>
      </motion.div>
      <div className='header-bottombox'></div>
    </div>
  )
}
export default Header
