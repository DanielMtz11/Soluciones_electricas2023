import './App.css';
import Nav from './components/Navbar';
import About from './components/About';
import Carousel from './components/Carousel';
// import AnimatedBackground from './components/Svg';
import Description from './components/Description';

function App() {
  
  return (
    <div className="App">
          <Nav/>
          <About/>
          <Description/>
          <Carousel showBtns={false}/>
    </div>
  );
}

export default App;

