import { Link } from "react-router-dom";
import LogoGoogle from "../../../assets/icons/google.svg";
import IlustrationBemVindo from "../../../assets/ilustrations/bem-vindo.svg";
import IlustrationGanhePontos from "../../../assets/ilustrations/ganhe-pontos.svg";
import IlustrationResgatePremios from "../../../assets/ilustrations/resgate-premios.svg";

export default function Carrosel() {
  return (
    <section className="carrosel">
      <button id="prev-img">=</button>
      <div className="container-carrosel">
        <ul className="container-cards" id="images">
          <li className="cadastro bg-card item-carrossel">
            <div className="cadastro-conteudo card-conteudo">
              <h2>Bem vindo ao FE Choices</h2>
              <p>Cadastre-se e receba bônus de até 800 pontos</p>
              <div className="cadastro-btn">
                <Link to="/cadastro" className="card-btn">
                  cadastre-se
                </Link>
                <Link to="/cadastro">
                  <img src={LogoGoogle} alt="google" />
                </Link>
              </div>
              <p className="breadcrumb">
                <span>Cadastre-se</span>
                <span>Palpite</span>
                <span>Ganhe Pontos</span>
              </p>
            </div>
            <div className="cadastro-img">
              <img
                src={IlustrationBemVindo}
                alt="Dois homens com um carro esportivo"
              />
            </div>
          </li>
          <li className="ganhar-pontos bg-card item-carrossel">
            <div className="ganhar-pontos-conteudo card-conteudo">
              <h2>Ganhe mais pontos!</h2>
              <p>Chame seus amigos através do seu link e ganhe mais pontos</p>
              <Link to="/afiliados" className="card-btn">
                Saiba Mais
              </Link>
            </div>
            <div className="ganhar-pontos-img">
              <img
                src={IlustrationGanhePontos}
                alt="Três pessoas sentadas com café na mão."
              />
            </div>
          </li>
          <li className="resgate-premios bg-card item-carrossel">
            <div className="resgate-premios-conteudo card-conteudo">
              <h2>Resgate prêmios!</h2>
              <p>
                De seus palpites, ganhe pontos e troque seus pontos por prêmios
              </p>
              <Link to="/premios" className="card-btn">
                Veja os prêmios
              </Link>
            </div>
            <div className="resgate-premios-img">
              <img
                src={IlustrationResgatePremios}
                alt="Pessoa em pé do lado de um pacote de presente"
              />
            </div>
          </li>
        </ul>
      </div>
      <button id="next-img">=</button>
    </section>
  );
}
