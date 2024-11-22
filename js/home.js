// COMPONENTE HOME (PRINCIPAL)

const PaginaHome = {
    template: `
    <div>
      <h1>Bem-vindo à Página Inicial</h1>
      <p>Selecione uma das opções acima para ver mais informações.</p>
      <h4> {{ variavelExemplo }} </h4>
    </div>
  `,
  data() {
    return {
        variavelExemplo : "Texto vindo de variael no componente"
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
        outraVariavelExemplo: "TITULO PRINCIPAL DAS TELAS"
      };
    },
    methods: {
        trocaPagina(paginaAtual) {
            this.paginaAtual = paginaAtual;
        }
    },
    template: `
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark">
            <ul style="margin-left: 350px;" class="nav nav-underline">
              <button @click="trocaPagina('home')" class='btn'>
                <li style="margin-inline: 20px ;" class="nav-item">
                    <a style="color:black; font-size: larger;" class="nav-link">Home</a>
                </li>
              </button>
              <button @click="trocaPagina('sobre')" class='btn'>
                <li style="margin-inline: 20px ;" class="nav-item">
                    <a style="color:black; font-size: larger;" class="nav-link">Sobre</a>
                </li>
              </button>
              <button @click="trocaPagina('contato')" class='btn'>
                <li style="margin-inline: 20px ;" class="nav-item">
                    <a style="color:black; font-size: larger;" class="nav-link">Contato</a>
                </li>
            </ul>
        </nav>
        <h4> {{ outraVariavelExemplo }} </h4>
  
        <section>
          <!-- Carrega o componente dinamicamente -->
          <component :is="componentes[paginaAtual]"></component>
        </section>
      </div>    `
  });
  
  // Monta a aplicação Vue no elemento com id "app"
  home.mount('#app');
  