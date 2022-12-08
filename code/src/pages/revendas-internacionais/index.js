import './index.css'
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import { Loader } from '@googlemaps/js-api-loader';
import revendas from '../../json/revendas.json';
import axios from 'axios';
let map;


function RevendasInt(){
  const loader = new Loader({
    apiKey: "AIzaSyD6OwfSBLPbZixcEOPjSEdBDwZrjVRhFRM",
    version: "weekly",
  });

 
  loader.load().then((google) => {

    function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -23.595544,  lng: -46.636574 },
        zoom: 11,
        mapTypeControl:false 
      });



      const styledMapType = new google.maps.StyledMapType(
        [
         {
           featureType: "poi",
           stylers: [
             { visibility: "off"}
            ]
         }
      ]
     )
      map.mapTypes.set("styled_map", styledMapType);
      map.setMapTypeId("styled_map");



      revendas.forEach((store) => {

              const content_string = 
              '<div id="content">' +
              '<div id="siteNotice">' +
              "</div>" +
              `<h1 id="firstHeading" class="firstHeading">${store.name_of_store}</h1>` +
              `<div id="bodyContent">` +
              `<div>${store.address}</div>` +
              "<br>" +
              `<div>${store.contact}</div>`+
              "<br>" +
              `<a href=${store.link_of_store}/>COMPRE AQUI seu chip mysimtravel</a>` +
              "</div>";
        
              const infowindow = new google.maps.InfoWindow({
                content: content_string,
                ariaLabel: "Uluru",
              });
                  
              let coordinates = new google.maps.LatLng(store.coordinates[0],store.coordinates[1])
              let marker = new google.maps.Marker({
                  position:coordinates,
                  title:"teste_marker",
                  icon:"/assets/img/PIN_mysimtravel.png"
              })

              marker.setMap(map);
              marker.addListener("click", () => {
                  infowindow.open({
                    anchor: marker,
                    map,
                  });
                  
              });

        });
        

            

            const input = document.getElementById("pac-input");      
            const autocomplete =new google.maps.places.Autocomplete(input, {
              fields: ["place_id", "geometry", "name", "formatted_address"],
            }) 
            autocomplete.bindTo("bounds", map);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input); 


            autocomplete.addListener("place_changed", async () => {

                  const place = autocomplete.getPlace();
                  const request = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${input.value}&key=AIzaSyD6OwfSBLPbZixcEOPjSEdBDwZrjVRhFRM`).catch((err) => {console.log(err)});
          
                    if(request.data.status !== 'ZERO_RESULTS'){
                        let location = request.data.results[0].geometry.location;
                        map.setCenter({lat:location.lat, lng:location.lng});
                        map.setZoom(15);
                    }else{
                      window.alert("O local que você digitou não existe. Verifique se não escreveu algo errado. '" + place.name + "'");
                      return;
                    }

              });


            input.value = "";
    }
    initMap()

  });

 

  return(
    <div>
      <Header/>
        <div className="midlow">
      <div className="text-midlow">
        <h1 className="h1midlow">Revendas Autorizadas</h1>
        <p className="p-midlow">O mysimtravel conta com +700 representantes no Brasil e no mundo!<br/>Encontre a loja mais próxima de você!</p>
      </div>
      <div className="map-midlow">
        <img className="map-img" src="/assets/img/map.svg" alt="Mapa Revendas"/>
      </div>
    </div>

    <div className="info-mid">
      <div className="info-text">
         <h1 className="info-h1">
          Procure umas  <span className="info-span">das nossas Revendas Autorizadas</span>
        </h1> 






    <div classNameName="map_box">

        <div className="sobre_input">
            <input
              id="pac-input"
              className="controls"
              type="text"
              placeholder="Digite o seu endereço aqui..."
            /> 
      </div>

        <div id="map"></div>

        <div id="infowindow-content">
            <span id="place-name" className="title"></span><br />
            <strong>Place ID</strong>: <span id="place-id"></span><br />
            <span id="place-address"></span>
        </div>


    </div>
       
       
      </div>
    </div>


    {/* <div className="main-container">
      <h1 className="h1-main">Aeroportos</h1>

      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-item-header">
            Aeroporto Internacional de Guarulhos
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              <div className="accordion-item1">
                <img
                  className="gru-img"
                  src="./img/GRU.svg"
                  alt="Aeroporto de Guarulhos"
                  srcset=""
                />
                <div className="div-items">
                  <h2>Aeroporto Internacional de Guarulhos - GRU</h2>
                  <h3>São Paulo - SP</h3>
                  <h3>End: Terminal T2 OESTE - Térreo Area Pública Externa</h3>
                  <h3>Loja: Guarda Volumes - Malex</h3>
                  <h3>Horário: Seg a Domingo - 24horas</h3>
                  <h3>Telefone: (11) 2445-25018</h3>
                </div>

                <div className="button-accordion">
                  <button className="button-acc">
                    <a href="https://mystore.mysimtravel.com/mysimtravelgrut3"
                      >COMPRE AQUI</a
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-item-header">
            Aeroporto Internacional de Viracopos
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              <div className="accordion-item1">
                <img
                  className="gru-img"
                  src="https://parquedpedro.com.br/lojas_files/19166.jpg"
                  alt="Aeroporto de Guarulhos"
                  srcset=""
                />
                <div className="div-items">
                  <h2>Aeroporto Internacional de Viracopos - VCP</h2>
                  <h3>Campinas - SP</h3>
                  <h3>End: Parque Viracopos - Portão de embarque nacional</h3>
                  <h3>Loja: LIKE CELL (Acessórios para Celular)</h3>
                  <h3>
                    Horário: Segunda à Sexta – 06:00 às 22:00hrs / Sabados,
                    Domingos e Feriados - 08:00 ás 20:00Hrs
                  </h3>
                  <h3>Telefone: (19) 984606969</h3>
                </div>

                <div className="button-accordion">
                  <button className="button-acc">
                    <a href="https://mystore.mysimtravel.com/mysimtravel-vcp"
                      >COMPRE AQUI</a
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-item-header">
            Aeroporto Internacional de Brasilia
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              <div className="accordion-item1">
                <img
                  className="gru-img"
                  src="https://www.essemundoenosso.com.br/wp-content/uploads/2019/08/guarda-volumes-guarulhos-congonhas-dest-740x463.jpg.webp"
                  alt="Aeroporto de Guarulhos"
                  srcset=""
                />
                <div className="div-items">
                  <h2>Aeroporto Internacional de Brasilia - BSB</h2>
                  <h3>Brasília - DF</h3>
                  <h3>End: Terminal T2 OESTE - Térreo Area Pública Externa</h3>
                  <h3>Loja: Guarda Volumes - Malex</h3>
                  <h3>
                    Horário: Seg á Sex, 6hrs ás 19hrs - Sab e Dom 8hrs ás 18hrs
                  </h3>
                  <h3>Telefone: (61) 9 96208037</h3>
                  <h3>Operação: Venda e Entrega</h3>
                </div>

                <div className="button-accordion">
                  <button className="button-acc">
                    <a href="https://mystore.mysimtravel.com/aerop-bsb"
                      >COMPRE AQUI</a
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-item-header">
            Aeroporto Internacional de Santos Dumont
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              <div className="accordion-item1">
                <img
                  className="gru-img"
                  src="http://vaiviajaristepo.com/wp-content/uploads/2017/10/dscn1753-1024x768.jpg?w=474"
                  alt="Aeroporto de Guarulhos"
                  srcset=""
                />
                <div className="div-items">
                  <h2>Aeroporto Internacional Santos Dumont - SDU</h2>
                  <h3>Rio de Janeiro - RJ</h3>
                  <h3>End: Área de embarque - Próximo entrada Check-In</h3>
                  <h3>Loja: Guarda Volumes - Malex</h3>
                  <h3>Horário: (Funcionamento do Aeroporto)</h3>
                  <h3>Telefone: (21) 38147606</h3>
                </div>

                <div className="button-accordion">
                  <button className="button-acc">
                    <a href="https://mystore.mysimtravel.com/malexsdu"
                      >COMPRE AQUI</a
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-item-header">
            Aeroporto Internacional do Galeão
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              <div className="accordion-item1">
                <img
                  className="gru-img"
                  src="https://www.falandodeviagem.com.br/imagens21/GuardaVolumeGIG1.jpg"
                  alt="Aeroporto de Guarulhos"
                  srcset=""
                />
                <div className="div-items">
                  <h2>Aeroporto Internacional TOM JOBIM - GIG</h2>
                  <h3>Rio de Janeiro - RJ</h3>
                  <h3>End: Terminal 2 - Desembarque Internacional</h3>
                  <h3>Loja: Guarda Volumes - Malex</h3>
                  <h3>Horário: Seg a Domingo - das 06:00Hrs as 23Hrs</h3>
                  <h3>Telefone: (11) 98734-1818</h3>
                </div>

                <div className="button-accordion">
                  <button className="button-acc">
                    <a href="https://mystore.mysimtravel.com/malexgig"
                      >COMPRE AQUI</a
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-item-header">
            Aeroporto Internacional de Confins
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              <div className="accordion-item1">
                <img
                  className="gru-img"
                  src="https://www.drogarias.net/imgempresas/air-farma-88378-H4oG.jpg"
                  alt="Aeroporto de Guarulhos"
                  srcset=""
                />
                <div className="div-items">
                  <h2>Aeroporto Internacional de Confins - CNF</h2>
                  <h3>Confins - MG</h3>
                  <h3>End: LMG-800 Km 7,9 s/n, Confins – MG, 33500-900</h3>
                  <h3>Loja: AIRFARMA – Farmácia</h3>
                  <h3>
                    Horário: Seg à Sex 06:00 às 20hrs / Sábado: 06:00 às
                    13:00hrs / Domingos: 10:00 às 17:00hrs
                  </h3>
                  <h3>Telefone: (11) 98734 1818</h3>
                </div>

                <div className="button-accordion">
                  <button className="button-acc">
                    <a href="https://mystore.mysimtravel.com/mysimtravel-cnf"
                      >COMPRE AQUI</a
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-item-header">
            Aeroporto Internacional de Recife
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              <div className="accordion-item1">
                <img
                  className="gru-img"
                  src="https://pr1.nicelocal.br.com/H5AVR3AjsOrE1wKFtrpsHw/1120x700,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2VQD8crWiKnc3u6uKKFWBBXvRoMIoK_F2xR1Z0wyFnAb6Y24nKyyE78y4Hjvl68ZOg"
                  alt="Aeroporto de Guarulhos"
                  srcset=""
                />
                <div className="div-items">
                  <h2>Aeroporto Internacional de Recife - REC</h2>
                  <h3>Recife - PE</h3>
                  <h3>
                    End: Piso Terreo - DESEMBARQUE NORTE (Praça Ministro Salgado
                    Filho s/n - Imbiribeira)
                  </h3>
                  <h3>Loja: BRASILNET</h3>
                  <h3>
                    Horário: Seg á Sab: Das 7:00Hrs ás 22:00Hrs - Domingos e
                    Feriados: 10:00hrs ás 18:00hrs
                  </h3>
                  <h3>Operação: VENDA E ENTREGA CHIP</h3>
                </div>

                <div className="button-accordion">
                  <button className="button-acc">
                    <a href="https://mystore.mysimtravel.com/brasilnetrec"
                      >COMPRE AQUI</a
                    >
                  </button>
                </div>
              </div>

              <div className="accordion-item2">
                <img
                  className="gru-img"
                  src="https://www.mercadoeeventos.com.br/wp-content/uploads/2020/10/unnamed.jpg"
                  alt="Aeroporto de Guarulhos"
                  srcset=""
                />
                <div className="div-items">
                  <h2>Aeroporto Internacional do Recife - Guararapes</h2>
                  <h3>Recife - PE</h3>
                  <h3>
                    End: Embarque Norte - 1º Andar - Em frente check in da TAP
                  </h3>
                  <h3>Loja: VIAJA BRASIL</h3>
                  <h3>
                    Horário: Segunda á Domingo - 24Hrs / Domingo e Feriados:
                    10Hrs ás 18Hrs
                  </h3>
                  <h3>
                    Operação: VENDA E ENTREGA CHIP / Telefone: (81) 98557-0500
                  </h3>
                </div>

                <div className="button-accordion">
                  <button className="button-acc">
                    <a href="https://mystore.mysimtravel.com/viaja-brasil"
                      >COMPRE AQUI</a
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */} 

    <Footer/>
    </div>
  )
}

export default RevendasInt;