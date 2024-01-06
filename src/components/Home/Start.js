import React from 'react'
import Sketch from "react-p5";
import icon_income_money from  "../../img/sharexpense_icon_income_money.png";
import icon_expense_money from  "../../img/sharexpense_icon_expensemoney.png";
import icon_saving_money from  "../../img/sharexpense_icon_savingmoney.png";
import "./Home.css";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Start() {
    return(
        <>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5}} className="start">
            <div className="p5">
                <P5 />
            </div>
            <div className="btn_start">
                <div className="circle_start"><Link to="../display" ><div className="incircle"><div className="text_start">Start</div></div></Link></div>
                <div className="circle_signin"><Link to="../login"><div className="incircle"><div className="text_start">Signin</div></div></Link></div>
            </div>
        </motion.div>
        
        </>
    )
}

function P5(){
    let income_money;
    let expense_money;
    let saving_money;
    let cirecles = [];

    const preload = (p5) => {
        income_money = p5.loadImage(icon_income_money);
        expense_money = p5.loadImage(icon_expense_money);
        saving_money = p5.loadImage(icon_saving_money);

    }
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(414, 896).parent(canvasParentRef);
        p5.background("#FDFDEB");


        for(let j=0; j<3; j++){
            for(let i=0; i<15; i++){
                let cirecles_info = [];
                let x = p5.random(0 + 20, 414 - 20);
                let y = p5.random(0 + 20, 896 - 20);
                let size = p5.random(60 , 150 )
                let tint = p5.random(150, 255);
                let rot = p5.random(0, 180);
                let move_x = p5.random(-1 , 1);
                let move_y = p5.random(-1 , 1);

                cirecles_info.push(x, y, size, tint, rot, move_x, move_y);
                cirecles.push(cirecles_info);
                
            }

        }
      };
    
      const draw = (p5) => {
        p5.background("#FDFDEB");

        for(let i=0; i < cirecles.length; i++){
            if(cirecles[i][0] < 0 || cirecles[i][0] > 414 ){
                cirecles[i][5] = cirecles[i][5] * (-1);
            }
            if(cirecles[i][1] < 0 || cirecles[i][1] > 896 ){
                cirecles[i][6] = cirecles[i][6] * (-1);
            }
            
        }

        for(let i=0; i < cirecles.length; i++){
            cirecles[i][0] += cirecles[i][5];
            cirecles[i][1] += cirecles[i][6];

            p5.push()
            p5.translate(cirecles[i][0], cirecles[i][1])
            p5.rotate(cirecles[i][4]);
            p5.tint(255, cirecles[i][3]);

            if(i < 15){
                p5.image(income_money, 0, 0, cirecles[i][2], cirecles[i][2]);
            }
            else if (i < 30){
                p5.image(expense_money, 0, 0, cirecles[i][2], cirecles[i][2]);
            }
            else{
                p5.image(saving_money, 0, 0, cirecles[i][2], cirecles[i][2]);
            }
            p5.pop();
        }
                
      };
      const mouseClicked = (p5) => {
        for(let i=0; i < cirecles.length; i++){
            if(p5.abs(p5.mouseX - cirecles[i][0]) < 55 && p5.abs(p5.mouseY - cirecles[i][1]) < 55){
                cirecles[i][3] = 0;
            }
        }
      }
    
      return <Sketch preload = {preload} setup={setup} draw={draw} mouseClicked={mouseClicked}/>;
}