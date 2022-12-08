import './index.css';
import { useState, useEffect } from 'react';
import {guidedSelling} from './functions/index';
import {country_request} from './functions/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../../components/header/index';
import Footer from '../../components/footer/index';


    //const success = (message) => toast.success(message);
    const error = (message) => toast.error(message);


function Compra(){ 
    //const [esim, set_esim] = useState();
    const [plan, setPlan] = useState([]);
    const [countries_to_exhibit_on_the_dropdown, setExhbition_country] = useState([]);
    let selected_countries = [];//this array will store all the  countries that the user texted and add.



    function select_countries(){
          let selected_country = document.querySelector('#country').value;
          if(selected_country === ''){
            error("É necessário escolher um país antes de adicioná-lo.");
            return
          }


          selected_countries.push(selected_country);
          document.getElementById('country').value = '';


          let newDiv = document.createElement("div");
          newDiv.classList.add("country_box");
          newDiv.setAttribute("id", "country_box")

          let country_name_div = document.createElement("div");
          let new_content = document.createTextNode(selected_country);
          country_name_div.appendChild(new_content);
          

          let button_close = document.createElement("button");
          button_close.classList.add("button_country_box");
          let image_button = document.createTextNode("X");

          button_close.onclick = () => {
            selected_countries.splice(selected_countries.indexOf(selected_country),1);console.log(selected_countries)
            newDiv.style.display = "none";
          }
          button_close.appendChild(image_button);

          
          newDiv.appendChild(country_name_div);
          newDiv.appendChild(button_close);


          let current_div = document.getElementById("before");
          var parentDiv = document.getElementById("selected_countries");
          parentDiv.insertBefore(newDiv, current_div);//a current_div precisa ser filha da parentdiv
      
    }


    
    async function searching_countries(){

        let select = document.getElementById("models"); 
        if(select.value === "" || selected_countries[0] === undefined ){
            error("Todos os campos são obrigatórios.");
            return
        }


        const clean_datas_inserted_per_user = () => {
          let countries = document.getElementsByClassName("country_box");
          for (let item of countries) {
            item.style.display = "none"
          }
        }


        let req = await guidedSelling(selected_countries);

        if(req.data.products[0] === undefined){
          error("A MySimTravel não possui cobertura no(s) país(es) digitados."); 
          setPlan([]); clean_datas_inserted_per_user(); return
        }else{
          setPlan(req.data.products); //is req for equal the nukk or undefined, i'm going to show an error message to my user
        }

       

    } 



    async function catching_counntries(){
       let req = await country_request();
       setExhbition_country(req);
    }


    useEffect(() => {
      catching_counntries()
    },[])


  return(
    <div>
      <ToastContainer />          
      <Header/>
      <div class="img-header">
      <img src="/assets/img/Frame.svg" alt="FUNDO IMAGEM CHIP"/>
      </div>
      
     
      <article class="info-header">
      <div class="info-div">
      <div class="ano-de-mercado">
          <h1>+6</h1>
          <h2>ANOS DE<br/>MERCADO</h2>
      </div>

      <div class="clientes-satisfeitos">
          <h1>+50 MIL</h1>
          <h2>CLIENTES<br/>SATISFEITOS</h2>
      </div>

      <div class="paises-cobertura">
          <h1>+180</h1>
          <h2>PAÍSES COM<br/>COBERTURA</h2>
      </div>
      </div>
      </article>


      <div class="section-input" id="section-input">
      <div class="input-s" id="input-s">
          <label for="Search"> Encontre o melhor chip para o seu(s) destino(s):</label>


          <div class="inputebutton">
              <input type="search" name="country" id="country" placeholder="Informe um País por vez" class="input-search" list="countries"/>
              <datalist id="countries">
                { countries_to_exhibit_on_the_dropdown.map((country) => {
                  return(<option value={country}></option>)
                }) }
              </datalist>
            
              <input type="submit" value="Adicionar" class="button" onClick={select_countries}/>
          </div>
       

          <div id="selected_countries" className='selected_countries'>
            <div id="before" className='ghost'></div>
          </div>
          <select name="modelocelular" class="input-phone" id="models" >
              <option value="">Escolha o modelo do seu celular</option>
              <option value="Celulares desbloqueados SAMSUNG">Celulares desbloqueados SAMSUNG GALAXY S20, S20+, S21, S22, Z Ultra ou superiores</option>
              <option value="Celulares (desbloqueados) iPhone XR, XS, 11, 12, 13 ou superiores">Celulares (desbloqueados) iPhone XR, XS, 11, 12, 13 ou superiores</option>
              <option value="Celulares desbloqueados Android / iPhone 4G ou superiores  ">Celulares (desbloqueados) Android / iPhone 4G ou superiores  </option>
          </select>
        

          <button class="buscar-button" onClick={searching_countries}>
            Buscar
          </button>
          
          
      </div>
    </div>

    <div className="fernando">
        {plan.map(pl => {
         
          return(
              <div className="plan">
                <div>{
                    pl.product.package.name.includes("GLOBAL") === true ?    <a href={`https://homologacao-mystore.mysimtravel.com/${"webstore_demo"}?integration=true&productId=${pl.id}&quantity=1`} target="_blank"> <img alt="" src={pl.product.image.medium}/> </a>  
                    :pl.product.package.name.includes("TOP DESTINO") === true ? <a href={`https://homologacao-mystore.mysimtravel.com/${"webstore_demo"}?integration=true&productId=${pl.id}&quantity=1`} target="_blank"> <img alt="" src={pl.product.image.medium}/> </a>
                    :pl.product.package.name.includes("ESPECIAL") === true ? <a href={`https://homologacao-mystore.mysimtravel.com/${"webstore_demo"}?integration=true&productId=${pl.id}&quantity=1`} target="_blank"> <img alt="" src={pl.product.image.medium}/> </a>
                    :pl.product.package.name.includes("MAX") === true ?      <a href={`https://homologacao-mystore.mysimtravel.com/${"webstore_demo"}?integration=true&productId=${pl.id}&quantity=1`} target="_blank"> <img alt="" src={pl.product.image.medium}/> </a>
                    :pl.product.package.name.includes("MEGAPACK") === true ? <a href={`https://homologacao-mystore.mysimtravel.com/${"webstore_demo"}?integration=true&productId=${pl.id}&quantity=1`} target="_blank"> <img alt="" src={pl.product.image.medium}/> </a>
                    :pl.product.package.name.includes("PACIFICO") === true ? <a href={`https://homologacao-mystore.mysimtravel.com/${"webstore_demo"}?integration=true&productId=${pl.id}&quantity=1`} target="_blank"> <img alt="" src={pl.product.image.medium}/> </a>
                    :''       
                    }

                </div>
              </div>
          )
        }
            
              )}
              
              
          </div> 
          
          <h1 className='text-envio'>Temos entrega via Carta Registrada, Sedex e retirada nos aeroportos parceiros.</h1>

          <section className='grid-info'>
            <h1 className='grid-h1'>O que é o chip internacional <span>mysimtravel</span> ?</h1>
            <div className='grid-infolayout'>
              <div className='grid-chipfisico'>
                <h1>Chip Físico e eSIM</h1>

                <p>
                  Chip Físico Regular, Micro e Nano<br/>
                  Chip virtual eSIM<br/>
                  Serviços de dados, ligações e SMS
                </p>
              </div>

              <div className='grid-naodescartavel'>
                <h1>Não é descartável</h1>

                <p>
                  Pode usar em todas suas viagens<br/>
                  Não perde a validade<br/>
                  Basta recarregar e usar
                </p>
              </div>

              <div className='grid-cobertura'>
                <h1>Cobertura Global</h1>

                <p>
                  Funciona em +180 Países<br/>
                  Multi-operadora em diversos paises
                </p>
              </div>

              <div className='grid-beneficio'>
                <h1>Custo-Benefício</h1>

                <p>
                  Chip mysimtravel é pré-pago<br/>
                  Não possui fidelidade<br/>
                  O crédito do chip não expira<br/>
                  Sempre em Reais<br/>
                  O custo de IOF e conversão de moeda
                </p>
              </div>

              <div className='grid-sup'>
                <h1>Suporte Técnico</h1>

                <p>
                  Equipe online 24h todos os dias<br/>
                  Através do Whatsapp e chat no site<br/>
                  Português, Espanhol e inglês
                </p>
              </div>

              <div className='grid-controlapp'>
                <h1>Controle pelo App</h1>

                <p>
                  Gestão pelo app mysimtravel FOR YOU<br/>
                  Ative aqui no Brasil pelo app<br/>
                  Consulte seu consumo de internet<br/>
                  Recarga em Reais pelo app
                </p>
              </div>
            </div>
          </section>

          <section className='flex-infochip'>
                <h1>Presença em todo território brasileiro!</h1>
                <div className='grid-infochip'>
                  <div className='ul-infochip'>
                    <ul>
                      <li><h1>Compre aqui no Brasil <span> antes</span> da sua viagem</h1></li>
                      <li><h1><span>+300</span> revendas autorizadas em todo o brasil</h1></li>
                      <li><h1>Compre online e retire no aeroporto</h1></li>
                      <li><h1>eSIM entregue no mesmo dia por email</h1></li>
                    </ul>

                    <h1 className='infochip-comprar'>Onde Comprar</h1>
                  </div>

                  <div className='info-chipimg'>
                    <img src='/assets/img/mockup-2-simcard.svg' alt='Mockup info'/>
                  </div>

                </div>
          </section>

          <section className='grid-paiseshome'>
            <div className='layout-paiseshome'>
            <h1>Alguns dos destinos <span>mais procurados </span>:</h1>
            <div className='grid-layoutpaiseshome'>
              <div className='pais-usa'> 
              <div><h2>Estados Unidos</h2></div>
              </div>

              <div className='pais-dubai'>
                <h2>Emirados Árabes</h2>
              </div>

              <div className='pais-França'>
                <h2>França</h2>
              </div>

              <div className='pais-Grécia'>
                <h2>Grécia</h2>
              </div>

              <div className='pais-Turquia'>
                <h2>Turquia</h2>
              </div>

              <div className='pais-Egito'>
                <h2>Egito</h2>
              </div>
            </div>
            </div>
          </section>

          <Footer/>

          

        
    <script src="js/script.js"></script>
    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    </div>

  )
}

export default Compra;