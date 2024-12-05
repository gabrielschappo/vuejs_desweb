const PaginaContato = {
    template: `
      <div class='container-sm' style='max-width: 700px;color: white;padding: 40px'>
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
    <textarea class="form-control" id="Textarea1" rows="3" placeholder="Descrição do seu pedido (número de pessoas, destino, etc)"></textarea>
  </div>
  <div class="mb-3">
    <button type="submit" class="btn btn-primary mb-3" onclick="enviarPedido()">Enviar pedido</button>
  </div>
</div>

<!-- Modal de confirmação -->
<div class="modal fade" id="modalConfirmacao" tabindex="-1" aria-labelledby="modalConfirmacaoLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalConfirmacaoLabel">Pedido Enviado</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Seu pedido foi enviado com sucesso! Entraremos em contato pelo número de telefone em breve.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>

    `,
    methods: {
        cliquei() {
            alert('click!')
        }
    },
  };
  function enviarPedido() {
    
    document.getElementById("InputName").value = "";
    document.getElementById("InputEmail").value = "";
    document.getElementById("InputPhone").value = "";
    document.getElementById("Textarea1").value = "";

   
    var myModal = new bootstrap.Modal(document.getElementById('modalConfirmacao'));
    myModal.show();
  }
  