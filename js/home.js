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
        outraVariavelExemplo: "TITULO FIXO POR VARIAVEL"
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
                <li style="margin-inline: 20px ;" class="nav-item">
                    <a @click="trocaPagina('home')" style="color:black; font-size: larger;" class="nav-link" href=''>Home</a>
                </li>
                <li style="margin-inline: 20px ;" class="nav-item">
                    <a @click="trocaPagina('sobre')" style="color:black; font-size: larger;" class="nav-link" href=''>Sobre</a>
                </li>
                <li style="margin-inline: 20px ;" class="nav-item">
                    <a @click="trocaPagina('contato')" style="color:black; font-size: larger;" class="nav-link" href=''>Contato</a>
                </li>
            </ul>
        </nav>
        <h4> {{ outraVariavelExemplo }}
  
        <section>
          <!-- Carrega o componente dinamicamente -->
          <component :is="componentes[paginaAtual]"></component>
        </section>
      </div>    `
  });
  
  // Monta a aplicação Vue no elemento com id "app"
  home.mount('#app');
  