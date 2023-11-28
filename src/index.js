    

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
    slider.scrollLeft -= 300
})

next.addEventListener('click', () => {
    slider.scrollLeft += 300
})