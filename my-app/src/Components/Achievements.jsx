import React from 'react'
import Achievement from "../assets/images/Achievement.svg";
import "./Achievements.css"
import courses from "../assets/images/courses.svg"
import back from "../assets/images/back.png"
import { Link } from 'react-router-dom';
const Achievements = () => {
  return (
    <div>
      <img src={back} className="backk" alt='backarrow'></img>
      <Link className='linkBackHomee' to="/portfolio-website/">  Home </Link>
      <img src={Achievement} alt="achievements" className='achievements-heading'></img>
      <div className='text'>
          <ul >
            <li className='courses' >Awarded Dean’s Merit Scholarship in 1st & 2nd year of studying Computer Science and Engineering</li>
            <li className='courses'>Participated in Rotary Youth Exchange: a short term exchange program to La Rochelle, France</li>
            <li className='courses'>Won an internal hackathon, organized for selecting teams for SIH 2022, 
               <br/>where over 50+ teams participated.</li>
            <li className='courses'>Completed 30 days of google cloud program, finished 11 quests</li>
        <li className='courses'>AWS Academy alumni: completed the following courses
          <ul>
              <li className='courses'> Cloud Foundations </li>
              <li className='courses'> Solutions Architect</li>
          </ul>
        </li>
        </ul>
      </div>
      <img src={courses} alt="courses" className='course'></img>
      <div className='courses-undertaken'>
        <ul>
          <li className='courses'><a className='link' href="https://www.udemy.com/certificate/UC-d930da32-5109-460b-b586-1a2bca61e351/">React - Beginner to Advanced + Redux </a></li>
          <li className='courses'><a className='link' href="https://www.udemy.com/certificate/UC-bd61c5b5-294b-4391-bcf1-add84fdde4d8/">Mastering Data Structures and Algorithms in C</a></li>
          <li className='courses'><a className='link' href="https://www.udemy.com/certificate/UC-1f5215d6-45b9-4579-a69d-4ecbe52fbb92/">Java Programming Masterclass </a></li>
          <li className='courses'><a className='link' href="https://coursera.org/share/cabab08a05a3bd55e7543f3a8cc26e8d">AWS Fundamentals Specialization</a></li>
          <li className='courses'><a className='link' href="https://coursera.org/share/e3cb81e78db54a2aa27146f2c28c2e7a">Microsoft Azure Fundamentals A-Z-900 examination specialization </a></li>
          <li className='courses'>Discrete Mathematics</li>
          <li className='courses'>Machine Learning & Mathematics for Machine Learning</li>
          <li className='courses'>Database Management Systems & SQL</li>
          <li className='courses'>Data structures & Algorithms</li>
          <li className='courses'>Computer Architecture & Operating Systems </li>
          <li className='courses'>Design & Analysis of Algorithms </li>
        </ul>
      </div>
      </div>
  )
}

export default Achievements


