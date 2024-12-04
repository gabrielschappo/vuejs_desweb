// COMPONENTE HOME (PRINCIPAL)

const PaginaHome = {
  template: `
    <div class="row" style="background-color: #0F2E45;">
    <div class="video-fundo">
        <video autoplay loop muted playsinline>
            <source src="Luxury Yacht - Riva Rivamare - Ferretti Group.mp4" type="video/mp4">
            Seu navegador não suporta vídeos HTML5.
        </video>
        <div class="overlay"></div>
        <div class="conteudo"></div>
    </div>

    <div class="col-12 text-center my-4">
        <p style="font-size: 40px; font-family: 'Raleway', sans-serif; color: white;">
            Descubra a liberdade das águas, vivencie aventuras inesquecíveis e aproveite cada momento com estilo
        </p>
        <p style="color: white;font-size: 17px;">Veja as opções abaixo para mais informações.</p>
    </div>
</div>

<section class="boat-section container">
    <!-- Container com imagem e texto lado a lado -->
    <div class="boat-card">
        <!-- Imagem -->
        <img src="https://static.wixstatic.com/media/4ba4a0_24eb77d247bf455584362c476cd29954~mv2.jpg/v1/fill/w_490,h_309,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ba4a0_24eb77d247bf455584362c476cd29954~mv2.jpg" alt="Iate Capitão Ferrat">
    </div>
    <div class="boat-card">
        <!-- Informações -->
        <div class="boat-info">
            <h2>Iate Capitão Ferrat</h2>
            <p><strong>Marca:</strong> Azimut 56 Full</p>
            <p><strong>Tamanho:</strong> 56 pés</p>
            <p><strong>Capacidade:</strong> 16 pessoas</p>
        </div>
        <span class="boat-number">1</span>
    </div>
</section>

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
