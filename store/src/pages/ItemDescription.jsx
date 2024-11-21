import React from "react";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import JanelaProduto from "../components/JanelaProduto";
import TextoDescricaoJanelaProduto from "../components/TextoDescriçãoJanelaProduto";

function ItemDescription(){
    return(
        <div className="ItemDescription">
            <Navbar />

            <br/>

            <JanelaProduto /> 
            <TextoDescricaoJanelaProduto />
               
    
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


            <Footer />
        </div>
    );
}

export default ItemDescription;