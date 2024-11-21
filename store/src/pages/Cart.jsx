import React from "react";
import Navbar from '../components/navbar';
import ItemCarrinho from "../components/ItemCarrinho";
import MenuLateral from "../components/MenuLateral";
import Footer from '../components/footer';


const Cart = () => {
    return(
        <div>
            <Navbar />

            <div style={{textAlign:"center", width:"100%"}}>
                <p style={{padding: "90px", fontFamily:"revert", fontSize:"64px", fontWeight:"unset"}}> Seu carrinho </p>
            </div>

            <ItemCarrinho />
            <MenuLateral />

            <br></br><br></br><br></br><br></br><br></br><br></br>

            <Footer />
        </div>
    );
}

export default Cart;    