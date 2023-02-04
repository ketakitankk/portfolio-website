import React from 'react'
import Tech from "../assets/images/Tech.svg"
import "./techStack.css"
import skills from "../assets/images/skills.svg"
import { Link } from 'react-router-dom'
import back from ".././assets/images/back.png"
const TechStackSkills = () => {
  return (
    <div className='techStackSkills'>
      <div>
        <img src={back} className="back" alt='backarrow'></img>
        <Link className='linkBackHome' to="/portfolio-website/">  Home </Link>
        <img src={Tech} className="heading-1" alt='heading'></img>
        <img src={skills} alt="skills" className='skills'></img>
      </div>
    </div>
  )
}

export default TechStackSkills