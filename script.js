document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Obter valores do formulário
    var username = document.getElementById('nome').value;
    var password = document.getElementById('senha').value;
  
    // Verificar as credenciais
    if (username === 'Ana Júlia Fabrin' && password === '28032210') {
      // Redirecionar para outra página
      window.location.href = 'loginCerto.html';
    } else {
      // Exibir mensagem de erro
      alert('SAI SUA PROSTITUTA, VC N É O AMORZINHO DO IGOR')
    }
  });