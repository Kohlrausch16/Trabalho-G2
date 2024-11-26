import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PaymentSelection from "../components/PaymentSelection";
import MenuLateralFechamento from "../components/MenuLateral_Fechamento";
import './PaymentForm.css'; 

function CheckoutPage() {
    return (
        <div className="CheckoutPage">
            <Navbar />

            <br />
            <div className="h1_paymentform">
            </div>

            <PaymentSelection />
            <br /><br /><br />
            <MenuLateralFechamento />

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <Footer />
        </div>
    );
}

export default CheckoutPage;
