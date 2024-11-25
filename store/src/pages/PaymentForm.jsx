import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PaymentSelection from "../components/PaymentSelection";
import ConfirmOrder from "../components/ConfirmOrder";

function CheckoutPage() {
    return (
        <div className="CheckoutPage">
            <Navbar />

            <br />

            <PaymentSelection />
            <ConfirmOrder />

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <Footer />
        </div>
    );
}

export default CheckoutPage;