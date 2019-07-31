import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './home.css'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
  MDBHamburgerToggler } from 'mdbreact';
import Title from '../../components/Title';

class Home extends Component {
  state = {
    collapse1: false,
    collapseID: ''
  }
  
  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }
  
  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  }

  render() {
    return (
      <div>
    
        <div id="home" class="parallax-window">
          <div class="name-container">
            <h1 class="nameTitle">Craig Lewis</h1>
            <h3 class="nameTitleSub">['Software', 'Full Stack', 'Pizza', '<ReactTypingEffect class="nameTitleSub2"
                                                                            speed={"150"}
                                                                            eraseDelay={"1150"}
                                                                            text={["Surfing", "Hiking", "Traveling", "Gaming"]}/>']</h3>
          </div>
        </div>
      <nav class="desktop-nav">
        <div class="nav-wrapper">
          <img
            src={require('../../images/logo.png')}
            width="60"
            height="65"
            className="d-inline-block align-top"
          />
          <ul class="nav-links">
            <li>
              <a href="#home"><h3>Home</h3></a>
            </li>
            <li>
              <a href="#intro"><h3>Profile</h3></a>
            </li>
            <li>
              <a href="#skills"><h3>Skills</h3></a>
            </li>
            <li>
              <a href="#projects"><h3>Projects</h3></a>
            </li>
            <li>
              <a href="#contact"><h3>Contact</h3></a>
            </li>
          </ul>
        </div>
      </nav>
      <MDBContainer className="mobile-nav">
      <MDBNavbar color="amber lighten-4" style={{ marginTop: '20px' }} light>
        <MDBContainer>
        <img
            src={require('../../images/logo.png')}
            width="45"
            height="40"
            className="d-inline-block align-top"
          />
          <MDBNavbarBrand>          
            Craig's Array
          </MDBNavbarBrand>
          <MDBHamburgerToggler color="#d3531a" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
            <MDBCollapse isOpen={this.state.collapse1} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="#!">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Link</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Profile</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </MDBContainer>

      <a id="intro" class="anchor"></a>
      <div class="intro-wrapper">
        {/* INTRO */}
        <div class="intro-picture">
          <img
          src={require('../../images/man-and-hound-web-safe_cropped.png')}
          width="75%"
          className="d-inline-block align-top"
          />
        </div>
        <div class="intro-text">
          <div class="">   
            <p>I'm a software developer with experience creating full-stack web applications with a large background with various languages.</p>
            <p>I started coding as a way to write scripts for video games I played as a teenager.  From there, it evolved into an appreciation of software development.  I graduated SDSU as a Computer Engineer as well as obtaining a certificate from UCSD's Extensions Web Development Bootcamp.</p>
            <p>At the moment I am currently looking for a full-time opportunity as either a software developer or full-stack engineer.</p>
          </div>
        </div>
      </div>
      {/* SKILLS */}
      <a id="skills" class="anchor"></a>
      <div class="skill-wrapper">
        <div class="skill-box">
          <h3 class="skill-header">Skills</h3>
        </div>
        <div class="skill skill-box">
          <h5>Javascript</h5>
        </div>
        <div class="skill skill-box middle-col">
          <h5>MySQL/NoSQL</h5>
        </div>
        <div class="skill skill-box">
          <h5>C</h5>
        </div>
        <div class="skill-box">
          {/*  */}
        </div>
        <div class="skill skill-box middle-row">
          <h5>HTML/CSS</h5>
        </div>
        <div class="skill skill-box middle-col middle-row">
          <h5>NodeJS</h5>
        </div>
        <div class="skill skill-box middle-row">
          <h5>C++</h5>
        </div>
        <div class="skill-box">
          {/*  */}
        </div>
        <div class="skill skill-box">
          <h5>React</h5>
        </div>
        <div class="skill skill-box middle-col">
          <h5>ExpressJS</h5>
        </div>
        <div class="skill skill-box">
          <h5>C#</h5>
        </div>
      </div>
      {/* PROJECTS */}
      <a id="projects" class="anchor"></a>
      <div class="project-wrapper">
        <div class="project-box">
          <h3 class="project-header">Works</h3>
        </div>
        <div>
          <a href="http://eng-share.herokuapp.com/"><h3>Eng-Share</h3></a> <h4>Foreign English Teacher forum utilizing MERN Stack.</h4>                 
        </div>
        <div></div>
        <div>
          <a href="https://clewis1337.github.io/EventFinder-PLUS/#/"><h3>EventFinder-PLUS</h3></a> <h4>Using multiple API's, easily search for Ticketmaster events in your area paired with a related youtube video as a preview.</h4>                 
        </div>
      </div>
      {/* CONTACT */}
      <a id="contact"></a>
      <div class="contact-wrapper">
        <div class="contact-box">
          <h3 class="contact-header">Contact Me</h3>
        </div>
        <div class="contact-box">
          <h5>Location</h5>
        </div>
        <div class="contact-box">
          <h5>Phone</h5>
        </div>
        <div class="contact-box">
          <h5>Email</h5>
        </div>
        <div class="contact-box">
          {/*  */}
        </div>
        <div class="contact-box">
          <p>San Diego, CA</p>
        </div>
        <div class="contact-box">
          <p>+01 619 344 1415</p>
        </div>
        <div class="contact-box">
          <p>clewis1337@gmail.com</p>
        </div>
      </div>
        {/* Make this side by side with above */}
        
        {/* Make this into checkboxes for skills 
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
      <p>Personal projects.</p>*/}
      {/* Modal with different projects?? */}
      {/* </div> */}
      

      </div>
    
    );
  }
}

export default Home;
