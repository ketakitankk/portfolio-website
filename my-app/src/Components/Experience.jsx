import React from 'react'
import { Link } from 'react-router-dom';
import back from "../assets/images/back.png";
import exp from "../assets/images/Experience.svg";
import aicte from "../assets/images/AICTE.svg";


const Experience = () => {
  return (
    <div className='experience-box'>
      <img src={back} className="back1" alt='backarrow'></img>
        <Link className='linkBackHome1' to="/">  Home </Link>
      <img className='heading' src={exp} alt="Experience-heading"></img>
      <div>
        <img className='RCOEM' src={aicte} alt="AICTE Virtual Internship"></img>
        </div>
    </div>
  )
}

export default Experience