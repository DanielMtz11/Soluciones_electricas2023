import './App.css';
import Nav from './components/Navbar';
import About from './components/About';
import Carousel from './components/Carousel';
// import AnimatedBackground from './components/Svg';
import Description from './components/Description';
import Banner from './components/Banner';
import Services from './components/Services';
function App() {
  
  return (
    <div className="App">
          <Nav/>
          <About/>
          <Description/>
          <Banner/>
          <Services/>
          <Carousel showBtns={true}/>

          
    </div>
  );
}

export default App;

