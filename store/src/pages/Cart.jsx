//import React from "react";
import Navbar from '../components/navbar';
import ItemCarrinho from "../components/ItemCarrinho";
import MenuLateral from "../components/MenuLateral";
import Footer from '../components/footer';


const Cart = () => {
    return(
        <div className="cart">
            <Navbar />
            <div className="content" style={{justifyContent:"center", width:"100%"}}>
                <p style={{padding: "122px 0px" , fontFamily:"Helvetica" , fontSize:"64px"}}> Seu carrinho </p>
            </div>
            <ItemCarrinho />
            <MenuLateral />

            <br></br><br></br><br></br><br></br><br></br><br></br>

            <Footer />
        </div>
    );
}

export default Cart;    