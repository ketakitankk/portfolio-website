import React from 'react'
import "./navbar.css"
import "./Achievements"
import "./Contact"
import "./Experience"
import { Link } 
    from "react-router-dom";

const NavigationBar = () => {
    return (
        <div className='rectangle1'>
          <div className='techStackSkills'>
                <p>
                    <Link className='links' to="/techStack">tech stack & skills</Link>
                </p>
          </div>
          <div className='achievements'>
              <p><Link className='links' to="/achievements">achievements</Link></p>
          </div>
          <div className='eduQualifications'>
                <p>
                    <Link className='links' to="/education">educational qualifications</Link></p>
            </div>
            <div className='experience'>
                <p>
                    <Link className='links' to="/experience">experience</Link></p>
          </div>
        
            {/* <div className='contact'>
            <p><Link className='links' to="/contactMe">contact me</Link></p>
          </div> */}
      </div>
  )
}

export default NavigationBar