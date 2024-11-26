import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PaymentSelection from "../components/PaymentSelection";
import MenuLateral from "../components/MenuLateral";
import './PaymentForm.css'; 

function CheckoutPage() {
    return (
        <div className="CheckoutPage">
            <Navbar />

            <br />
            <div className="h1_paymentform">
            <h2>Selecione o método de pagamento</h2>
            </div>

            <PaymentSelection />
            <br /><br /><br />
            <MenuLateral />

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <Footer />
        </div>
    );
}

export default CheckoutPage;
