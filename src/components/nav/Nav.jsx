import './nav.scss';

export default function Nav() {
  return <div className='nav'>
        <div className="wrapper">
            <div className="name">
                <a href="">Henry Jung</a>    
            </div>
            <div className="links">
                <a href="#about">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
  </div>;
}
