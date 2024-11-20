import React from "react";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import ConfirmOrder from '../components/order-confirmation'



const OrderConfirmation = () => {
  return (
    <div className="OrderConfirmation">
        <Navbar />  <br /><br /><br />

        <ConfirmOrder />

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Footer />
    </div>
  );
};

export default OrderConfirmation;