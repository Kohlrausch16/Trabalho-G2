
import "./JanelaProduto.css";
import img1 from "../components/assets/images/TecladoEMouse.png";
import img2 from "../components/assets/images/ImagemTeclado.jpg";
import img3 from "../components/assets/images/Setup.jpg";

function JanelaProduto(){
    return(
    <div>
    <div className="JanelaProduto"> 
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div id="carousel" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="pic1"></button>

                            <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="pic2"></button>

                            <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="pic3"></button>
                            </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={img1} style={{width: "583px", height: "477px"}} alt="pic1"/>
                            </div>

                            <div className="carousel-item">
                                <img src={img2} style={{width: "583px", height: "477px"}} alt="pic2" />
                            </div>

                            <div className="carousel-item">
                                <img src={img3} style={{width: "583px", height: "477px"}} alt="pic3"/>
                            </div>
                        </div>


                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden"></span>
                        </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 

    );
}

export default JanelaProduto;













