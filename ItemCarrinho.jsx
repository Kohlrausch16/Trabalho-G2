import { HiTrash } from "react-icons/hi2";
import SeletorQuantidade from "./SeletorQuantidade";
import "./ItemCarrinho.css";


function ItemCarrinho() {

  return (
      <div className="ItemCarrinho">
          <div id="FlexCarrinho">
            <div className="CardCarrinho">
              <img src="/images/TecladoEMouse.png" id="image" />
            </div> 
          </div>

          <div id="FlexDescricao">
            <p className="Descricao"> Teclado e Mouse Logitec </p>
          </div>

          <div id="FlexPreco">
          <p> R$ 180,00 </p> 
          </div>

          <div id="FlexContador">
            <SeletorQuantidade />
          </div>

          <div id="FlexDeletar">
            <HiTrash className="IconeDeletar"/>
          </div>
          
      </div>
    );
}

export default ItemCarrinho;

