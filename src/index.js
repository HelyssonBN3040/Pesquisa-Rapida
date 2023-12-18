    

//Cookies e Privacidade
var msgCookies = document.getElementById('cookies-msg');

function aceito(){
    localStorage.lgdp = "sim"
    msgCookies.classList.remove('mostrar')
}

if(localStorage.lgdp == "sim"){
    msgCookies.classList.remove('mostrar')
}else{
    msgCookies.classList.add('mostrar')
}

//slider
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.slider')

prev.addEventListener('click', () => {
    slider.scrollLeft -= 370
})

next.addEventListener('click', () => {
    slider.scrollLeft += 350
})

//Validação de Formulário
function validarFormulario() {
    // Obter os valores dos campos do formulário
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    
    // Verificar se todos os campos estão preenchidos
    if (nome === '' || email === '' || subject === '' || message === '') {
      // Se algum campo estiver vazio, exibir uma mensagem de erro
      window.alert('Por favor, preencha todos os campos corretamente.');
    } else {
      // Se todos os campos estiverem preenchidos, exibir o alerta
      window.alert('Mensagem Enviada com sucesso!');
    }
  }