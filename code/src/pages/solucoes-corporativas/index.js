import './index.css'
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';

function solucoesCorp(){
  return(
    <div>
        <Header/>
        <div className='container-predios'>
          <div className='container-text'>
          <h1>Soluções corporativas <span>mysimtravel</span></h1>
          <h2>Somos <span>a primeira empresa</span> de SIM CARD internacional a lançar plano corporativos<br/>Pré-Pagos no Brasil, com alcance global em +150 países</h2>
          </div>
        </div>
  
            <p className='article-1'>Desenhado para atender necessidade de empresas que possuem frequentes viagens internacionais, nossos planos Corporativos Pré-Pagos possuem<br/>características especiais, fundamentadas em três pilares:</p>

            <div className='grid-selection'>
              <h1 className='inovacao'>Inovação</h1>
              <h1 className='reducao'>Redução de custos</h1>
              <h1 className='gestao'>Gestão simplificada</h1>
            </div>
          


        <section className='section-article'>
          <div className='article-div'>
            <div>
            <img alt="" src='/assets/img/lampada.svg'/>
            <h1>Inovação</h1>
            </div>

            <ul>
              <li>Chip internacional, válido globalmente em +200 países.</li>
              <li>Chip físico (Regular, Micro e Nano) - Chip eletrônico eSIM</li>
              <li>Possibilidade de preservar seu número pessoal no Whatsapp e para 
                <span> RECEBER</span> ligações em qualquer país de nossa cobertura global.</li>
              <li>Possibilidade de manter seu número pessoal como identificador de chamadas</li>
              <li>Planos de internet de 1GB a 20GB</li>
              <li>Número Local do Brasil associado ao Chip mysimtravel (são +47 prefixos disponíveis no Brasil)</li>
              <li>Disponibilidade de Números Locais de +60 países para prover soluções de mobilidade global específicas para necessidades da sua empresa</li>
              <li>Temos acordo global com +340 operadoras de telefonia celular em todas os continentes.Somos o único SIM Card capaz de fornecer Contingência / Redundância de<br/>redes,permitindo aos nosso usuários manter conectividade permanente</li>
              <li>Sem limite de velocidades de Download / Upload de dados. Permitindo a qualidade do serviço e a necessidade de altas demandas de transferência de dados em curto<br/>espaço de tempo</li>

              <li>Use seu aplicativo mysimtravel CORP, disponivel para IOS e Android para controle e gestão dos pacotes de dados ativados em seu SmartPhone, tablet ou HotSpot.</li>

              <li>Pacotes específicos para CHINA que permitem utilizar todos os recursos ocidentais (Google, Google Maps, Waze, Facebook, etc)</li>
            </ul>
          </div>


          <div className='article-div1'>
            <div>
            <img alt="" src='/assets/img/cubo.svg'/>
            <h1>Gestão simplificada</h1>
            </div>

            <ul>
              <li>Conta para gestão corporativa de todos os SIM Card adquiridos pela empresa</li>
              <li>Aplicativos para IOS e Android para gestão individual de cada SIM Card</li>
              <li>Relatórios e extratos On Line</li>
              <li>Perfil de Administrador e gestão de usuários cadastrados</li>
              <li>Políticas de recarga automática por SIM Card</li>
              <li>Transferência de créditos de um chip para outro</li>
              <li>Gestão centralizada</li>
              
            
            </ul>
          </div>


          <div className='article-div2'>
            <div>
            <img alt="" src='/assets/img/dolar.svg'/>
            <h1>Redução de Custos</h1>
            </div>

            <ul>
              <li>Faturamento pós-pago com créditos disponibilizados imediatamente</li>
              <li>Créditos não utilizados no mês corrente, permanecem válidos para meses posteriores</li>
              <li>Plano PAY-PER-USE, sem contrato fixo e tarifas mínimas mensais</li>
              <li>Pacotes de VOZ Globais com tarifas exclusivas</li>
              <li>Tarifas de VOZ globais especiais mysimtravel</li>
            </ul>
          </div>


          <h1 className='conheca-plan'>Conheça agora as nossas Soluções</h1>
          <p className='conheca-p'>Entre com contato agora mesmo e conheça em detalhes todas as nossas opções de roaming internacional</p>

          <form action="" method="get">
          <label for="GET-name">Nome completo
          <input id="GET-name" type="text" name="name" placeholder='Nome Completo' className='input'/>
          </label>

          <label for="GET-name">Telefone
          <input id="GET-name" type="tel" name="name" placeholder='Telefone para Contato' className='input'/>
          </label>

          <label for="GET-name">Email para Contato
          <input id="GET-name" type="email" name="name" placeholder='Email para contato' className='input'/>
          </label>

          <label for="GET-name">Digite seu Texto
          <input id="GET-name" type="text" name="name" placeholder='Digite seu texto...' className='input-text'/>
          </label>

          <input type="submit" value="Enviar" className='submit-send'/>
          
          </form>

        </section>

        <Footer/>
    </div>
  )
}

export default solucoesCorp;