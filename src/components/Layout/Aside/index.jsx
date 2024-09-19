import { Link } from 'react-router-dom';

function Aside() {
  return(
    <aside className="aside" id="aside">
      <a className="link-obter" href="./index.html">Ganhe 20</a>
      <nav>
        <p><button onClick="eventoPopulares()" aria-controls="populares" aria-expanded="true">Populares</button></p>
        <ul id="populares" className="ativa">
          <li><Link to='/palpites'>Palpites</Link></li>
          <li><Link to='/roleta'>Roleta</Link></li>
          <li><Link to='/fantasy'>Fantasy</Link></li>
          <li><Link to='/circuitos'>Circuitos</Link></li>
          <li><Link to='/aovivo'>Ao Vivo</Link></li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li><Link to='/sobre'>Sobre Nós</Link></li>
          <li><Link to='/afiliados'>Afiliados</Link></li>
          <li><Link to='/premios'>Prêmios</Link></li>
          <li><Link to='/suporte'>Suporte</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Aside