import "./TextoDescriçãoJanelaProduto.css";
import SeletorQuantidade from "./SeletorQuantidade";
import BuyButton from "./buy-button";
import AddCartButton from "./add-CartButton";

function TextoDescricaoJanelaProduto(){

    return (
        
        <div className="content">
            <div className="BlocoTexto">
                <p className="TituloEPreco">
                    Teclado e Mouse Logitec
                    <i id="icone" class="fa-regular fa-heart"></i>
                </p>
               
                <p className="Texto">
                Este teclado sem fio apresenta um design moderno e perfil fino, ideal para aprimorar o visual da mesa. Com o recurso Easy Switch, permite emparelhar e alternar facilmente entre dispositivos, como computadores, smartphones e tablets. Oferece uma experiência de digitação confortável, com teclado numérico e teclas FN para atalhos. A bateria tem longa duração, com modo de hibernação automática e alcance sem fio de até 10 metros, conectando-se via Bluetooth ou receptor USB. Compatível com várias plataformas, como Windows, macOS, iOS, Android e Linux, o teclado permite personalização dos atalhos com o software Logi Options+.
                </p>

                <p className="TituloEPreco">
                    R$ 180,00
                </p>
  
            </div>

            <br/>
            <div className="props">
                <SeletorQuantidade />
                <BuyButton />
                <AddCartButton />
            </div>

        </div>

    );
}

export default TextoDescricaoJanelaProduto;