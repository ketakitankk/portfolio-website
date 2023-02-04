import React from 'react';
import edu from "../assets/images/Education-heading.svg";
import "./Education.css";
import RCOEM from "../assets/images/RCOEMBox.svg";
import CPS from "../assets/images/CPSBox.svg";
import back from "../assets/images/back.png";
import { Link } from 'react-router-dom';

const Education = () => {
  return (
    <div className='education-box'>
       <img src={back} className="back1" alt='backarrow'></img>
        <Link className='linkBackHome1' to="/portfolio-website/">  Home </Link>
      <img className='heading' src={edu} alt="Education-heading"></img>
      <div>
        <img className='RCOEM' src={RCOEM} alt="RCOEM"></img>
        <img className='CPS' src={CPS} alt="CPS"></img>
        </div>
    </div>
  )
}

export default Education