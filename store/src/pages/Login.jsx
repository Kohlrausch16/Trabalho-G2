import React from "react";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import PersonalDetailsForm from "../components/personal-details-form";


const Login = () => {
  return (
    <div className="Login">
        <Navbar />
        <br /><br /><br /><br />
        <PersonalDetailsForm />
        
        <br /><br /><br /><br />  <br /><br /><br /><br />
        <Footer />
    </div>
  );
};

export default Login;