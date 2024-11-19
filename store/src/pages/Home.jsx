import React from "react";
import Navbar from '../components/navbar';
import HomeCarousel from '../components/home-carousel';
import Footer from '../components/footer';
import HomeCard from '../components/home-card';

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <HomeCarousel />

      <HomeCard />

      <br></br><br></br><br></br><br></br><br></br><br></br>

      <Footer/>
    </div>
  );
};

export default Home;