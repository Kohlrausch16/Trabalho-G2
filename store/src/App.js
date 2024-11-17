import './App.css';
import Navbar from './components/navbar';
import HomeCarousel from './components/home-carousel';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <HomeCarousel/>

      <br></br><br></br><br></br><br></br><br></br><br></br>

      <Footer/>
    </div>
  );
}

export default App;
