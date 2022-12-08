import './index.css'
import Header from '../../components/header';
import Footer from '../../components/footer';

function termosEcond(){
  return(
    <div class='main'>
        <Header/>

        <h1>Políticas de uso e privacidade do site</h1>

        <div class='container'>
        <a href="./privacidade">Políticas de privacidade da informação SGMobile Brasil</a>
        <a href="/termos-e-condicoes">Políticas de Termos de uso do site</a>
        </div>

        <Footer/>
    </div>
  )
}

export default termosEcond;