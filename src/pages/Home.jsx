import { Link } from 'react-router-dom';

import IlustrationBandeira from '../assets/icons/bandeira-usa.svg'
import IlustrationGiro1 from '../assets/ilustrations/giro-1.svg'
import IlustrationGiro2 from '../assets/ilustrations/giro-2.svg'


import Carrosel from '../components/Feature/Carrosel';
import CardFantasy from '../components/UI/CardFantasy';

function Home() {
  return (
    <main className="main container">
      {/* ------------------------------------ CARD CARROSSEL ------------------------------------ */}
      <Carrosel/>
      {/* ------------------------------------ CARD PROXIMA CORRIDA ------------------------------------ */}
      <section className="proximo-circuito">
        <h2>Venha conhecer o próximo circuito que será percorrido pela formula e!</h2>
        <div className="proximo-circuito-conteudo">
          <div>
            <img src={IlustrationBandeira} alt="Bandeira dos Estados Unidos da América"/>
            <h3>Portland - rodada 13</h3>
          </div>
          <Link to='/circuitos' className="card-btn">Ver Circuito</Link>
        </div>
      </section>
      {/* ------------------------------------ CARD ROLETA ------------------------------------ */}
      <section className="giro-gratis bg-card">
        <img src={IlustrationGiro1} alt="Pessoa sentada mexendo no celular."/>
        <div className="giro-gratis-conteudo">
          <h2>Venha coletar seu giro grátis</h2>
          <div>
            <Link to='/roleta-semanal' className="card-btn">Roleta semanal</Link>
            <Link to='/roleta-diaria'>Roleta diária</Link>
          </div>
        </div>
        <img src={IlustrationGiro2} alt="Pessoa em pé mexendo no celular"/>
      </section>
      {/* ------------------------------ CARD FUNCIONAMENTO PALPITES ------------------------------ */}
      <CardFantasy titulo={"Como funcionam os Palpites"} texto={"Com a FE CHOICES, o usuário tem a oportunidade de testar os seus conhecimentos sobre a Fórmula E, palpitando, de forma totalmente gratuita, apenas usando os nossos."}/>
      {/* ------------------------------ CARD FUNCIONAMENTO FANTASY ------------------------------ */}
      <CardFantasy titulo={"Como funciona o Fantasy?"} texto={"Com a FE CHOICES, o usuário tem a oportunidade de criar a sua própria equipe no Fantasy, podendo escolher os seus pilotos, e escolhendo a bandeira de sua equipe, de equipes reais da FE."}/>
    </main>
  )
}

export default Home