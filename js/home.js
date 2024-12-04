// COMPONENTE HOME (PRINCIPAL)

const PaginaHome = {
  template: `
    <div class="row" style="background-color: #0F2E45;">
    <div class="video-fundo">
        <video autoplay loop muted playsinline>
            <source src="Luxury Yacht - Riva Rivamare - Ferretti Group.mp4">
            Seu navegador não suporta vídeos HTML5.
        </video>
        <div class="overlay"></div>
        <div class="conteudo"></div>
    </div>
    <div class="col-1"></div>
    <div class="col-10 text-center my-4 mt-5">
        <p style="font-size: 40px; font-family: 'Raleway', sans-serif; color: white;">
            Descubra a liberdade das águas, vivencie aventuras inesquecíveis e aproveite cada momento com estilo
        </p>
        <p style="color: white;font-size: 17px;">Veja as opções abaixo para mais informações.</p>
    </div>
    <div class="col-1"></div>
    </div>

  <div class="row">
    <div class="col-2"></div> 

    <div class="col-8"> 
        <section class="boat-section">
            
            <div class="boat-card">
                <img src="https://static.wixstatic.com/media/4ba4a0_24eb77d247bf455584362c476cd29954~mv2.jpg/v1/fill/w_490,h_309,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ba4a0_24eb77d247bf455584362c476cd29954~mv2.jpg" alt="Iate Capitão Ferrat">
            </div>

            
            <div class="boat-card">
                <div class="boat-info">
                    <h2 style="font-size: 35px;">Iate Capitão Ferrat</h2>
                    <p style="font-size: 20px;"><strong>Marca:</strong> Azimut 56 Full</p>
                    <p style="font-size: 20px;"><strong>Tamanho:</strong> 56 pés</p>
                    <p style="font-size: 20px;"><strong>Capacidade:</strong> 16 pessoas</p>
                </div>
                <span class="boat-number">1</span>
            </div>
          </section>
            <div class="boat-description p-4" style="text-align: center; font-weight: bold; margin-top: 20px;">
              <p style="font-size: 18px;color: white;">O <span style="color: #0198B6;">Capitão Ferrat</span> é um iate Italiano de luxo, com duas belíssimas Suites, uma generosa sala climatizada, uma sala ambiente externa e duas áreas de lazer incríveis, uma no primeiro andar e uma na proa da embarcação, e mais uma excelente cozinha toda equipada. Tem dois motores poderosos e grande estabilidade na água, tudo para proporcionar o máximo conforto e um excelente dia para todos a bordo!</p>
            </div>
          </div> 

    <div class="col-2"></div> 
    </div>
    
    <div class="row mt-5">
      <div class="col-2"></div> 

      <div class="col-8"> 
          <section class="boat-section">
              
              <div class="boat-card">
                  <img src="https://static.wixstatic.com/media/9179e3_4b42a24107c3492bb6cc4eb914e1ecd3~mv2.jpg/v1/fill/w_490,h_286,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9179e3_4b42a24107c3492bb6cc4eb914e1ecd3~mv2.jpg">
              </div>

              
              <div class="boat-card">
                  <div class="boat-info">
                      <h2 style="font-size: 35px;"> Lancha Gummy</h2>
                      <p style="font-size: 20px;"><strong>Marca:</strong> Magnum</p>
                      <p style="font-size: 20px;"><strong>Tamanho:</strong> 42 pés</p>
                      <p style="font-size: 20px;"><strong>Capacidade:</strong> 12 pessoas</p>
                  </div>
                  <span class="boat-number">2</span>
              </div>
          </section>
           <div class="boat-description p-4 " style="text-align: center; font-weight: bold; margin-top: 20px;">
        <p style="font-size: 18px;color: white;">A <span style="color: #0198B6;">Gummy</span> é uma belíssima embarcação de 42 pés, composta de uma suite toda equipada, cozinha, área comum interna e uma excelente área de lazer externa mais dois poderosos motores que proporcionam velocidade, estabilidade e segurança.</p>
      </div> 
          </div> 

      <div class="col-2"></div> 
  </div>
  </div>
  
  <div class="row mt-5">
    <div class="col-2"></div> 

    <div class="col-8"> 
        <section class="boat-section">
            
            <div class="boat-card">
                <img src="https://static.wixstatic.com/media/9179e3_2ef85d7bbe6c47cc8f2826f3dc9b5fb0~mv2.jpg/v1/fill/w_490,h_286,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9179e3_2ef85d7bbe6c47cc8f2826f3dc9b5fb0~mv2.jpg">
            </div>

            
            <div class="boat-card">
                <div class="boat-info">
                    <h2 style="font-size: 35px;"> Lancha Nomand</h2>
                    <p style="font-size: 20px;"><strong>Marca:</strong> Fibra Forte</p>
                    <p style="font-size: 20px;"><strong>Tamanho:</strong> 26 pés</p>
                    <p style="font-size: 20px;"><strong>Capacidade:</strong> 8 pessoas</p>
                </div>
                <span class="boat-number">3</span>
            </div>
        </section>
        <div class="boat-description p-4 " style="text-align: center; font-weight: bold; margin-top: 20px;">
        <p style="font-size: 18px;color: white;">A <span style="color: #0198B6;">Nomand</span> ​é uma excelente opção para quem está em um grupo menor ou quer um passeio mais privado, a embarcação possui ambiente de estar no covés, área de lazer na proa e uma suite com banheiro, excelente opcão custo beneficio, para tornar o seu dia incrível.</p>
      </div>
    </div> 

    <div class="col-2"></div> 
</div>
  


  `,
  data() {
    return {
      variavelExemplo: "Texto vindo de variael no componente "
    }
  }
};

const home = Vue.createApp({
  data() {
    return {
      paginaAtual: 'home', // Página inicial
      componentes: {
        home: PaginaHome, // carrega o template home
        sobre: PaginaSobre, // Carrega o componente "Sobre"
        contato: PaginaContato // Carrega o componente "Contato"
      },
      outraVariavelExemplo: ""
    };
  },
  methods: {
    trocaPagina(paginaAtual) {
      this.paginaAtual = paginaAtual;
    }
  },
  template: `
      <div style="background-color: #001F3D;">
        <nav class="navbar navbar-expand-lg navbar-dark" style="justify-content: center;">
            <ul class="nav nav-underline">
              <li style="margin-inline: 20px ;" class="nav-item">
                  <img src="fotos_iate/LOGO-removebg-preview.png" style="max-width: 80px">
              </li>
              <button @click="trocaPagina('home')" class='btn'>
                <li style="margin-inline: 20px ;" class="nav-item">
                    <a style="color:white; font-size: 25px;" class="nav-link">Home</a>
                </li>
              </button>
              <button @click="trocaPagina('sobre')" class='btn'>
                <li style="margin-inline: 20px ;" class="nav-item">
                    <a style="color:white; font-size: 25px;" class="nav-link">Sobre</a>
                </li>
              </button>
              <button @click="trocaPagina('contato')" class='btn'>
                <li style="margin-inline: 20px ;" class="nav-item">
                    <a style="color:white; font-size: 25px;" class="nav-link">Contato</a>
                </li>
            </ul>
        </nav>

  
        <section style="background-color: #0F2E45;">
          <component :is="componentes[paginaAtual]"></component>
        </section>
      </div>    `
});

// Monta a aplicação Vue no elemento com id "app"
home.mount('#app');
