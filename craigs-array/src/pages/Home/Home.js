import React, { Component } from 'react';
import './home.css'
import Title from '../../components/Title';


class Home extends Component {
  render() {
    return (
      <div>
       <div class="parallax-window">
        <div class="name-container">
            <h1 class="nameTitle">Craig Lewis</h1>
            <h3 class="nameTitleSub">Softwater Developer</h3>
        </div>
       </div>

      <div class="intro-container">
            <h2 class="margin-b-0">Intro</h2>
            <p>What I am all about.</p>            
      </div>
        {/* Make this side by side with above */}
        <div class="margin-b-60">   
          <p>I'm Craig Lewis and I'm all that.  I am a software engineer with an interest in technology, computers are pretty cool.  Went to San Diego State and graduated as a Bachelor of Computer Engineering.  After living in Korea and exploring the world for a couple of years, I returned and began my career in web development by attending a Web Dev Bootcamp at UCSD. </p>
          <p>Now I'm currently looking for a career within the spectrum of software development or full-stack Engineering.</p>
        </div>
        {/* Make this into checkboxes for skills */}
        <h3>Skills - From the front of my brain to the back</h3>
        <h5>Javascript</h5>
        <h5>HTML / CSS / React</h5>
        <h5>Databases - SQL / noSQL</h5>
        <h5>C, C++, C#, Android</h5>
      
      <h2 class="margin-b-0">Experience</h2>
      <p>Takes one to know one</p>
      
      <div class="jobs-container">
								<div class="job">
									<h2>El Cajon Homeless Task Force</h2>
									<h3><font color="#5677fc">Contracted Web Developer</font></h3>
									<h4>November 2018 - January 2019</h4>
									<p>Contracted to design, build and manage a website dedicated to providing contact information to all resources available in San Diego East County.</p>
								</div>
			</div>
      <div class="projects-container">
      <h2>Works</h2>
      <p>Personal projects.</p>
      {/* Modal with different projects?? */}
      </div>
      

      </div>
    
    );
  }
}

export default Home;
