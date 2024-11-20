import React from "react";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import AddToCartButton from "../components/add-CartButton";
import BuyButton from "../components/buy-button";
import CheckoutButton from "../components/checkout-button";



const OrderConfirmation = () => {
  return (
    <div className="OrderConfirmation">
        <Navbar />  <br /><br /><br />
        <AddToCartButton /> <br /> <br />
        
        <BuyButton /><br /><br />

        <CheckoutButton /><br /><br />


        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Footer />
    </div>
  );
};

export default OrderConfirmation;