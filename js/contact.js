const PaginaContato = {
    template: `
      <div class='container-sm' style='max-width: 700px'>
          <h3>Entre em contato para garantir seu aluguel:</h3>
          <div class="mb-3 mt-4">
            <label for="InputName" class="form-label">Nome completo</label>
            <input type="text" class="form-control" id="InputName" placeholder="Seu nome">
          </div>
          <div class="mb-3">
            <label for="InputEmail" class="form-label">Endereço de email</label>
            <input type="email" class="form-control" id="InputEmail" placeholder="Seu email">
          </div>
          <div class="mb-3">
            <label for="InputPhone" class="form-label">Telefone para contato</label>
            <input type="number" class="form-control" id="InputPhone" placeholder="Seu número de telefone">
          </div>
          <div class="mb-3">
            <label for="Textarea1" class="form-label">Descreva seu pedido</label>
            <textarea class="form-control" id="Textarea1" rows="3" placeholder="Descrição do seu pedido"></textarea>
          </div>
          <div class="mb-3">
            <button type="submit" class="btn btn-primary mb-3">Enviar pedido</button>
          </div>
      </div>
    `,
    methods: {
        cliquei() {
            alert('click!')
        }
    },
  };

  