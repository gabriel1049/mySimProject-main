import './index.css'

export default function header(){
    return(
        <header class="header">
        <div class="container">
            <div class="header-main">
              <div class="logo">
                  <a href="#"><img src="/assets/img/Logo.svg" alt="LOGO mysimtravel" class="img-logo"/></a>
              </div>
              <div class="open-nav-menu">
                  <span></span>
              </div>
              <div class="menu-overlay">
              </div>
              
              <nav class="nav-menu">
                <div class="close-nav-menu">
                <img src="/assets/img/close.svg" alt="close"/>
                </div>
                <ul class="menu">
                  <li class="menu-item">
                      <a href="/">Home</a>
                  </li>
                  <li class="menu-item navcomprar">
                      <a href="#">Comprar</a>
                  </li>
                    <li class="menu-item menu-item-has-children">
                      <a href="#" data-toggle="sub-menu">Como Funciona <i class='bx bx-chevron-down'></i></a>
                      <ul class="sub-menu">
                          <li class="menu-item"><a href="/como-funciona">Configurações</a></li>
                          <li class="menu-item"><a href="#">Chip Virtual</a></li>
                      </ul>
                    </li>
                  
                    <li class="menu-item">
                      <a href="/m2m-iot">M2M & IoT</a>
                    </li>
                    <li class="menu-item">
                      <a href="/solucoes-corporativas">Corporativo</a>
                  </li>
                    <li class="menu-item menu-item-has-children">
                      <a href="#" data-toggle="sub-menu">Onde Comprar <i class='bx bx-chevron-down'></i></a>
                      <ul class="sub-menu">
                          <li class="menu-item"><a href="#">Aeroportos</a></li>
                          <li class="menu-item"><a href="/revendas-internacionais">Revendas Autorizadas</a></li>
                      </ul>
                    </li>
                    <li class="menu-item">
                      <a href="/revendas-internacionais">Seja uma revenda</a>
                    </li>
                    <li class="menu-item">
                      <a href="#">Blog</a>
                  </li>
            
                </ul>
                
                
              </nav>
              
              <div class="recarga-text menu-item" >
                <h1 class="recarga-text">
                  Recarga
                </h1>
              </div>
              
            </div>
        </div>
      </header>
    )
}