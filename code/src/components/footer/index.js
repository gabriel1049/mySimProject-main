import './index.css'

export default function footer(){
    return(
        <div className='footer'>
            <div className='div-footer'>

            <div className='footer-empresa'>
            <img src='/assets/img/sgmobile-branco23.svg' alt='sgmobile logo'/>
            <h1>Distribuidor autorizado Brasil e América Latina<br/>Chip internacional <span>mysimtravel</span><br/>Sempre conectado</h1>
            <p>® SGMobile & mysimtravel. 2022. All Rights Reserved</p>
            </div>

            <div className='footer-infos1'>
            <a href="#"><h1>mysimtravel</h1></a>
            <a href="#">Home</a>
            <a href="#">Sobre Nós</a>
            <a href="#">Depoimentos</a>
            <a href="#">Contatos</a>
            </div>

            <div className='footer-infos2'>
              <h1>Endereço</h1>
            <div className='footer-grid2'>
            <img src='/assets/img/gps1.svg' alt='sgmobile logo'/>
            <p>Rua Domingos de Morais,2187<br/>CJ 707 - Torre Paris<br/>Vila Mariana</p>
            </div>

            <div className='footer-grid3'>
            <img src='/assets/img/relogio.svg' alt='sgmobile logo'/>
            <p>Segunda á Sexta<br/>09am - 18pm</p>
            </div>
            </div>

            <div className='footer-infos2'>
              <h1>Suporte</h1>
            <div className='footer-grid2'>
            <img src='/assets/img/telefone.svg' alt='sgmobile logo'/>
            <p>(11) 2309-5655 - Ramal 2</p>
            </div>

            <div className='footer-grid3'>
            <img src='/assets/img/whatsapp.svg' alt='sgmobile logo'/>
            <p>(11) 98734-1818</p>
            </div>

            <div className='footer-grid4'>
            <img src='/assets/img/email.svg' alt='sgmobile logo'/>
            <p>suporte.brasil@sgmobile.com.br</p>
            </div>
            </div>


            </div>

            <div className='termos-condicoes'>
              <div>
              <li><a href="/termos-e-condicoes">Termos de uso</a></li>
              <li><a href="#">Direitos e Cookies</a></li>
              </div>
            </div>
          </div>
    )
}