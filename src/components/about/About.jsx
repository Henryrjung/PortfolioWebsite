import './about.scss';
import Nav from '../nav/Nav';

export default function About() {
  return <div className='about' id='about'>
    <Nav />
      <div className="left">
        <div className="containerTop">
          <div className="imgCont">
          <img src="assets/profile pic copy 2.png" alt="" />
        </div>
        <div className="topText">
          {/* <h1>Hello</h1>
          <h2>I'm</h2> */}
        </div>
        </div>
        <div className="containerBottom">
          <h2>Hello I'm</h2>
          <h1>Henry Jung</h1>
          <h2>Freelance Front End</h2>
          <h3>Developer</h3>
        </div>
      </div> 
      <div className="right">
        <div className="topSection">
          <h1>About Me</h1>
        </div>
        <div className="bottomSection">
          <h3>I'm a freelance front end developer based out of Kansas City and New York. I Have a certificate from KU university in full stack development and work mainly in React, CSS, and Javascript.</h3>
        </div>
          
        </div>
  </div>;
}
