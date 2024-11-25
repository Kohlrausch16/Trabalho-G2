import "./MenuLateral.css";
import CheckoutButton from "./checkout-button";

function MenuLateral(){
    return (
        <div className="Content">
            <div className="MenuLateral">
                <div id="Titulo">  
                    &nbsp;Pedido
                </div>

                <div id="Subtotal"> 
                    &nbsp;Subtotal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;
                    R$180,00 
                </div>

                <div id="Frete"> 
                    &nbsp;Frete&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;Grátis
                </div>

                <div id="Total"> 
                    &nbsp;Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R$180,00
                </div>
                
            </div>

           
                <CheckoutButton link="/paymentsn" />
        </div>
    )
}

export default MenuLateral;