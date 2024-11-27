// COMPONENTE HOME (PRINCIPAL)

const PaginaHome = {
  template: `
    <div class= "row" style ="background-color: #0F2E45;" >
        <div class="imagem-fundo"> </div> 
        <div class="col-2"></div>
        <div class="col-8">
            <div>
              <p class="me-3 mt-5" style="font-size: 30px;font-family: 'Raleway', sans-serif; text-align: center;color: white;">Descubra a liberdade das águas, vivencie aventuras inesquecíveis e aproveite cada momento com estilo</p>
              <p>Selecione uma das opções acima para ver mais informações.</p>
              <h4> {{ variavelExemplo }} </h4>
            </div>
        </div>
        <div class="col-2">
        </div>
        <section class="header-section">
    <h1>Desfrute das belezas naturais do litoral sul de Pernambuco <br>
      fazendo o melhor passeio de lancha exclusivo com sua família, amigos ou grupo corporativo.</h1>
  </section>

  <!-- Card com informações da lancha -->
  <section class="boat-section container">
    <div class="row align-items-center">
      <!-- Imagem -->
      <div class="col-md-6">
        <div class="boat-card">
          <img src="https://via.placeholder.com/500x300" alt="Iate Capitão Ferrat">
          <a href="#" class="btn btn-light position-absolute" style="bottom: 20px; left: 20px;">
            <i class="bi bi-play-circle"></i>
          </a>
        </div>
      </div>
      <!-- Informações -->
      <div class="col-md-6">
        <div class="boat-card position-relative p-4">
          <div class="boat-info">
            <h2>Iate Capitão Ferrat</h2>
            <p><strong>Marca:</strong> Azimut 56 Full</p>
            <p><strong>Tamanho:</strong> 56 pés</p>
            <p><strong>Capacidade:</strong> 16 pessoas</p>
          </div>
          <span class="boat-number">1</span>
        </div>
      </div>
    </div>
  </section>
    
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
