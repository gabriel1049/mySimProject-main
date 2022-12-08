import './index.css';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';

function m2m(){

  function animation(){
     const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

      accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", event => {
          
          accordionItemHeader.classList.toggle("active");
          const accordionItemBody = accordionItemHeader.nextElementSibling;
          if(accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
          }
          else {
            accordionItemBody.style.maxHeight = 0;
          }
          
        });
      }); 
  }

  setTimeout(() => {
    animation()
 },10)

  return(
    <div>
      <Header/>
    <div class="div-body">
         
    <section class="iot-container">

        <img src="/assets/img/raio-chip.svg" alt="" class="raio"/>

        <div class="texto-iot">
            <h1>M2M <span class="span">mysimtravel</span></h1>
            <h2>Top Connect e mysimtravel M2M & IoT é a solução perfeita para gestão e monitoração de ativos de valor distribuídos globalmente.</h2>
        </div>

        <div class="chip-iot">
        <img src="/assets/img/chip.svg" alt="Chip"/>
        </div>
    </section>

<div class='div-main'>
    
    <article class="solucoes">
        <h1>A Solução M2M/ Iot mysimtravel é <span class="span">completa</span></h1>
        <p>Nossas soluções de mobilidade oferecem conexões M2M & IOT combinando mais de 350 provedores de telecomunicações em uma única rede<br/>móvel global.</p>
    </article>


    <section class="cards-info">
        <img src="/assets/img/card-info/card-cobertura.svg" alt="" srcset=""/>
        <img src="/assets/img/card-info/card-gestao.svg" alt="" srcset=""/>
        <img src="/assets/img/card-info/card-pagamento.svg" alt="" srcset=""/>
        <img src="/assets/img/card-info/card-plano-de-dados.svg" alt="" srcset=""/>
        <img src="/assets/img/card-info/card-seguranca.svg" alt="" srcset=""/>
        <img src="/assets/img/card-info/card-chip.svg" alt="" srcset=""/>
    </section>

    <article class="info-m2m">
        <div class="info1">
            <h1 class="h1-info">Sempre a conexão mais robusta</h1>
                <div class="div-p">
            <p>Queremos que seu dispositivo esteja conectada à rede mais forte.</p>
            <p>É por isso que oferecemos roaming nacional sem impor a rede local e permitimos que seus dispositivo se conectem à melhor rede em cada
                <br/>local, sem favorecer uma operadora específica</p>
            <p>isso garante uma conexão forte e estável em todos os momentos</p>
            </div>
        </div>

        <div class="info2">
            <h1 class="h1-info">Preço justo, controle total</h1>
            <div class="div-p">
            <p>Ao trabalhar com <span class="span">mysimtravel M2M</span>, você se beneficia de uma estrutura de preços clara e alta flexibilidade</p>
            <p>Nossos planos de dados para +135 países garantem economias adicionais.</p>
            <p>Você só paga pelos cartões SIM ativos</p>
            <p>Os cartões SIM podem ser ativados e desativados a qualquer momento através do nosso portal do cliente</p>
            </div>
        </div>

        <div class="info3">
            <h1 class="h1-info">Conecte-se em +135 países</h1>
            <div class="div-p">
            <p><span class="span">mysimtravel M2M</span>pode se conectar a mais de 350 redes em mais de 135 países diferentes.</p>
            <p>Para você, isso significa que você não precisa gerenciar contratos diferentes, portais de clientes diferentes ou pessoas de contato diferentes<br/>para cada país</p>
            <p>Com mysimtravel M2M, você tem um pacote tudo-em-um</p>
            </div>
        </div>
    </article>

    <section class="info-services">
        <article>
                <h1>Recursos de gestão avançados disponíveis para redes complexas M2M e IoT</h1>
            </article>

            <div class="list-services">
                <ul>
                    <li><a href="#">Serviço APN privado</a></li>
                    <li><a href="#">Serviço de VPN</a></li>
                    <li><a href="#">Serviço de IP estático privado</a></li>
                    <li><a href="#">Ferramentas de solução de problemas</a></li>
                    <li><a href="#">Formato de chips disponíveis</a></li>
                    <li><a href="#">Software do cartão SIM</a></li>
                    <li><a href="#">Plataforma eSIM</a></li>
                </ul>
            </div>
    </section>

    <div class="accordion-item">
        <div class="accordion-item-header">
          Confira a nossa cobertura
        </div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
            <div class="accordion-item1">


                <div class="column1">
                    <ul>
                        <h1>Américas</h1>
                      <li>Argentine</li> 
                      <li>Brazil</li> 
                      <li>Canada</li> 
                      <li>Colombia</li> 
                      <li>Costa Rica</li>
                      <li>Dominican Republic</li>
                      <li>Ecuador</li>
                      <li>El Salvador</li>
                      <li>Guatemala</li>
                      <li>Honduras</li>
                      <li>Mexico</li>
                      <li>Nicaragua</li>
                      <li>Panama</li>
                      <li>Paraguay</li>
                      <li>Peru</li>
                      <li>Puerto Rico</li>
                      <li>St. Barthelemy</li>
                      <li>St. Martin Island</li>
                      <li>Uruguay</li>
                      <li>USA</li>
                    </ul>
                </div>

                <div class="column1">
                    <ul>
                        <h1>Europa</h1>
                      <li>Andorra, Armenia, Austria</li>
                      <li>Belarus, Belgium, Bulgaria</li> 
                      <li>Croatia, Cyprus, Czech.Rep.</li> 
                      <li>Denmark, Estonia</li>
                      <li>Finland, France</li>
                      <li>Georgia, Germany, Gibraltar, Greece</li>
                      <li>Hungary</li>
                      <li>Guatemala</li>
                      <li>Iceland, Ireland, Italy</li>
                      <li>Latvia, Liechtenstein, Lithuania, Luxembourg</li>
                      <li>Netherlands, Norway</li>
                      <li>Poland, Portugal</li>
                      <li>Romania,</li>
                      <li>San Marino,</li>
                      <li>Serbia, </li>
                      <li>Slovakia,</li>
                      <li>Slovenia,</li>
                      <li>Spain,</li>
                      <li>Sweden,</li>
                      <li>Switzerland,</li>
                      <li>Turkey</li>
                      <li>Ukraine, United Kingdom</li>
                      <li>Vatican City</li>

                    </ul>
                </div>

                <div class="column1">
                        <ul>
                            <h1>Ásia, África, Oceania</h1>
                          <li>Australia</li>
                          <li>Azerbaijan</li> 
                          <li>China</li> 
                          <li>Egypt</li>
                          <li>HongKong</li>
                          <li>India, Indonesia,</li>
                          <li>Israel</li>
                          <li>Japan</li>
                          <li>Kazakhstan,</li>
                          <li>Korea (South)</li>
                          <li>Malaysia,</li>
                          <li>Morocco</li>
                          <li>New Zealand</li>
                          <li>Philippines</li>
                          <li>Russia</li>
                          <li>Singapore,</li>
                          <li>Sri Lanka,</li>
                          <li>Seychelles,</li>
                          <li>South Africa,</li>
                          <li>Taiwan,</li>
                          <li>Tajikistan,</li>
                          <li>Thailand,</li>
                          <li>Uzbekistan,</li>
                          <li>United Arab Em.</li>

                        </ul>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

      <Footer/> 
    </div>
    
  )
}


export default m2m;