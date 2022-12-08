import './index.css'

import Header from '../../components/header/index';
import Footer from '../../components/footer/index';





/* let btn = document.querySelector('#btn');
let div = document.querySelector("#container");
let divMostrar = document.querySelector("#teste");
let retornar = document.querySelector('#btn2');

btn.addEventListener("click", function(){

    
    if(div.style.display === "none") {

    } else {
        div.style.display = "none";
        divMostrar.style.display = "block";
    } 
    
});

retornar.addEventListener("click", function(){

    if(divMostrar.style.display === "none") {} else {
        divMostrar.style.display = "none";
        div.style.display = "block"
    }

})
 */
function ComoFunciona(){



  return(
    
    <div class="body">
        
        <Header/>
      
        <section class="containercell">
        <div class="boxtext-container">
            <h1>Vamos te auxiliar na instalação do mysimtravel</h1>
            <p>Siga nossas orientações para usar o mysimtravel no dia de sua viagem</p>
        </div>

        <div class="boxlogo-container">
            <img src="/assets/img/config-cell/mockup-celular.svg" alt="Mockup Celulares" class="logo-celulares"/>
        </div>
    </section>

    
<main id="container">
    <section class="marcas-container">
    
        <div class="textmarcas">
            <h1>Configurando seu celular com <span class="span1">mysimtravel</span></h1>
            <p>	Selecione abaixo o modelo do seu celular: </p>
        </div>

    
        <div class="marcas">
            <div class="logo1  apple" id="btn">
            <box-icon type='logo' name='apple'></box-icon>
                <p>Apple</p>
            </div>

            <div class="logo1 samsung">
                <img src="./assets/img/config-cell/samsung.svg" alt="Samsung"/>
            </div>

            <div class="logo1 xiaomi">
                <img src="./assets/img/config-cell/xiaomi.svg" alt="Xiaomi"/>
            </div>

            <div class="logo1 motorola">
                <img src="./assets/img/config-cell/motorola.svg" alt="Motorola"/>
            </div>

            <div class="logo1 huawei">
                <img src="./assets/img/config-cell/huawei.svg" alt="Huawei"/>
            </div>

            <div class="logo1 google">
                <img src="./assets/img/config-cell/google.svg" alt="Google"/>
            </div>
        </div>
    
    </section>

    <div class="text-randow" >
        <a href="#">Veja outros modelos aqui</a>
    </div>

    <div class="ul-content">
        <h1>Saiba Também sobre:</h1>

        <ul class='ule'>
            <li class='li1'><a href="#">Como funciona o app mysimtravel FOR YOU</a></li>
            <li class='li1'><a href="#">Conheça nossa lista global de operadoras</a></li>
            <li class='li1'><a href="#">Dicas de economia de dados no Iphone</a></li>
            <li class='li1'><a href="#">Tarifas de Voz e SMS</a></li>
        </ul>
    </div>
</main>

<div class="celular-iphone" id="teste">
    <div class="boxtext">
    <p>Configuração - <span class="span2">IPHONE</span></p>
    <h1>Configurando seu celular com o <span class="span1">mysimtravel</span></h1>
    <h2>Selecione abaixo o modelo: </h2>
    </div>  

    <div class="grid-iphone">
        <div class="iphone7 cardphone">
            <img src="/assets/img/config-cell/iphone-7.svg" alt="Iphone 7"/>
            <p>Iphone 7 | 8 | SE | X</p>
        </div>

        <div class="iphoneX cardphone">
            <img src="/assets/img/config-cell/iphone-x.svg" alt="Iphone X"/>
            <p>Iphone SE (2020) | Xs | XR</p>
        </div>

        <div class="iphone11 cardphone">
            <img src="/assets/img/config-cell/iphone-11.svg" alt="Iphone 11"/>
            <p>Iphone 11 | 12 | 13+ </p>
        </div>

    </div>

    <div class="celular-textinfo">
        <p>Caso não saiba o modelo do seu celular, vá em <span class="span2">Ajustes - Geral - Sobre - Nome do modelo</span> e você vai encontrar a informação do seu celular. 
        Ou entre em contato com o nosso CHAT para tirar suas dúvidas</p>
    </div>

    <button class="voltar" id="btn2">Retornar</button>


    </div>

    <Footer/>

    </div>
    
  )
}


export default ComoFunciona;