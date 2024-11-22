const PaginaContato = {
    template: `
      <div>
        <h1>Contato</h1>
        <p>Entre em contato conosco através do formulário abaixo:</p>
        <form>
          <label for="nome">Seu Nome:</label>
          <input type="text" id="nome" name="nome"><br><br>
  
          <label for="mensagem">Mensagem:</label><br>
          <textarea id="mensagem" name="mensagem"></textarea><br><br>
  
          <button type="button" @click="cliquei">Enviar</button>
        </form>
      </div>
    `,
    methods: {
        cliquei() {
            alert('click!')
        }
    },
  };

  