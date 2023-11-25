import icon_home from "../img/sharexpense_icon_home.png";
import icon_input from "../img/sharexpense_icon_input.png";
import icon_display from "../img/sharexpense_icon_display.png";
import icon_friend from "../img/sharexpense_icon_friend.png";
import React from 'react';
import "./Footer.css";

export default function Footer(){
    return(
        <>
            <div className= "footer">
                <div className="footer_box">
                    <img className= "sharexpense_icon_home" src= {icon_home} alt="home"/>
                    <img className= "sharexpense_icon_input" src= {icon_input} alt="input"/>
                    <img className= "sharexpense_icon_display" src= {icon_display} alt="display"/>
                    <img className= "sharexpense_icon_friend" src= {icon_friend} alt="friend"/>
                </div>
            </div>
        </>
    )
}