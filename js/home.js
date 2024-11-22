// COMPONENTE HOME (PRINCIPAL)

const PaginaHome = {
    template: `
    <div class= "row mt-5" style ="background-color: lightgray;" >
        <div class="col-4">
        </div>
        <div class="col-4">
             <div>
              <p style="font-size: 90px">Bem-vindo à Página Inicial</p>
              <p>Selecione uma das opções acima para ver mais informações.</p>
              <h4> {{ variavelExemplo }} </h4>
            </div>
        </div>
        <div class="col-4">
        </div>
    
    </div>
  `,
  data() {
    return {
        variavelExemplo : "Texto vindo de variael no componente "
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
      <div style="background-color: #003366;">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <!-- Navegação entre as páginas -->
          <button @click="trocaPagina('home')">Página Inicial</button>
          <button @click="trocaPagina('sobre')">Sobre Nós</button>
          <button @click="trocaPagina('contato')">Contato</button>
        </nav>
        <h4> {{ outraVariavelExemplo }} 
  
        <section style="background-color: lightgray;">
          <component :is="componentes[paginaAtual]"></component>
        </section>
      </div>    `
  });
  
  // Monta a aplicação Vue no elemento com id "app"
  home.mount('#app');
  