import SeletorQuantidade from "./SeletorQuantidade";
import "./ItemCarrinho.css";
import img1 from "./assets/images/TecladoEMouse.png";


function ItemCarrinho() {

  return (
      <div className="ItemCarrinho">
          <div id="FlexCarrinho">
            <div className="CardCarrinho">
              <img src={img1} alt="" id="image" />
            </div> 
          </div>

          <div id="FlexDescricao">
            <p className="descricao"> Teclado e Mouse Logitec </p>
          </div>

          <div id="FlexPreco">
            <p> R$ 180,00 </p> 
          </div>

          <div id="FlexContador">
            <SeletorQuantidade />
          </div>

          <div id="FlexDeletar">
            <i class="fa-solid fa-trash-can"></i>
          </div>
          
      </div>
    );
}

export default ItemCarrinho;
