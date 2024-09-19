import { Link } from 'react-router-dom';

import Logo from '../../../assets/logo.svg'
import IconMenu from "../../../assets/icons/menu.svg"

function Header({clickMenu}) {
  return (
    <header className="header">
      <div className="header-logo-menu">
        <img id="menu" className="menu" src={IconMenu} alt="menu hamburguer" onClick={() => clickMenu()}/>
        <Link to="/"><img src={Logo} alt="FE Choices"/></Link>
      </div>
      <div className="header-nav">
        <div className="header-pages">
          <Link to='/palpites'>Palpites</Link>
          <Link to='/fantasy'>Fantasy</Link>
          <Link to='/roleta'>Roleta</Link>
        </div>
        <div className="header-login">
          <Link to='/login'>Entrar</Link>
          <Link to='/cadastro'>Cadastre-se</Link>
        </div>
      </div>
    </header>
  )
}

export default Header