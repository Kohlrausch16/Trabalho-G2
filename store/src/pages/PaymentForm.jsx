import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PaymentSelection from "../components/PaymentSelection";
import MenuLateral from "../components/MenuLateral";

function CheckoutPage() {
    return (
        <div className="CheckoutPage">
            <Navbar />

            <br />

            <PaymentSelection />
            <MenuLateral />

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <Footer />
        </div>
    );
}

export default CheckoutPage;
