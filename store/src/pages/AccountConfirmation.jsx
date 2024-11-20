import React from "react";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import Confirmation from '../components/account-confirmation.jsx';



const AccountConfirmation = () => {
  return (
    <div className="AccountConfirmation">
        <Navbar />
        <br /><br /><br /><br />

        <Confirmation />
        <br /><br /><br /><br />
        
        <Footer />
    </div>
  );
};

export default AccountConfirmation;