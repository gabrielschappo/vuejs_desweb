const PaginaContato = {
    template: `
      <div class='container-sm'>
      <h3>Entre em contato para garantir seu aluguel:</h3>
          <div class="mb-3 mt-4">
            <label for="exampleFormControlInput1" class="form-label">Nome completo</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Telefone para contato</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
      </div>
    `,
    methods: {
        cliquei() {
            alert('click!')
        }
    },
  };

  