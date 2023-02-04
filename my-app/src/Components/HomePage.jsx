import React from 'react'
import "./Home.css"
import myImage from "../../src/assets/images/myImage.svg"
import myName from "../../src/assets/images/myName.svg"

const HomePage = () => {
  return (
      <div className='home'>
        <img className='myName' src={myName} alt="name"></img>
        <img className='img' src={myImage} alt="me"></img>
          <div className='textBox'>
            <h6 className='text'>
              Hello! Welcome to my website <br/> <br/>

              My name is Ketaki Tank & currently I’m in my 
              3rd year of studying 
              “Bachelors of Technology in Computer Science and Engineering”.
              My interests include: Full Stack Development,
              Cloud computing & Machine Learning!
              Don’t hesitate to send through an email,
              if you wish to connect with me :)
              
        </h6>
        <button className='btn'>Send mail!</button>
          </div>
      </div>

  )
}

export default HomePage