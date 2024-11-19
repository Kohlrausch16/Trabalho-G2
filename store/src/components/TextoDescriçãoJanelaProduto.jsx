import "./TextoDescriçãoJanelaProduto.css";
import { CiHeart } from "react-icons/ci";


function TextoDescricaoJanelaProduto(){

    return (
        <div className="BlocoTexto">
            <p className="TituloEPreco">
                Teclado e Mouse Logitec
                <CiHeart className="CiHeart" />
            </p>

            

            <p className="Texto">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quaerat repudiandae, ullam laboriosam cum harum ipsam voluptatibus repellendus rerum beatae. Dolorum adipisci odio incidunt quas rem ab quis amet enim
            </p>

            <p className="TituloEPreco">
                R$ 180,00
            </p>
        </div>
    );
}

export default TextoDescricaoJanelaProduto;