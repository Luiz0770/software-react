import Header from './components/Layout/Header';
import Aside from './components/Layout/Aside';
import Footer from './components/Layout/Footer';
import { Outlet } from 'react-router-dom';

function App() {

  function clickMenu() {
    const aside = document.getElementById('aside');
  
    if (aside.style.display == 'block') {
      aside.style.display = 'none';
    } else {
      aside.style.display = 'block';
    }
  }


  return (
    <>
      <Header clickMenu={clickMenu}/>
      <Aside/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
