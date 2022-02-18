import './app.scss';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="app">
      <div className='sections'>
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
