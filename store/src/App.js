import './App.css';
import Navbar from './components/navbar';
import HomeCarousel from './components/home-carousel';
import Footer from './components/footer';
import HomeCard from './components/home-card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeCarousel />

      <HomeCard />

      <br></br><br></br><br></br><br></br><br></br><br></br>

      <Footer/>
    </div>
  );
}

export default App;
