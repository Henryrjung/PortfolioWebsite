import './about.scss';
import Nav from '../nav/Nav';

export default function About() {
  return <div className='about' id='about'>
    <Nav />
      <div className="left">
        <div className="imgCont">
          <img src="assets/homepagebackground copy.png" alt="" />
        </div>
       
      </div> 
      <div className="right">
          <h2>Hello, I'm</h2>
          <h1>Henry Jung</h1>
          <h3>Freelance front End Developer</h3>
        </div>
  </div>;
}
