//HOME.JS

//Global Variables
var click = 0;

//Post card dropdown
$(".more").click(function(){
    if (click == 0){ 
        $(this).next(".dropdown_content").show(); click++;
    } else {
        $(this).next(".dropdown_content").hide(); click = 0;
    }
});

$(document).click(function(){
    if (click > 0) { $(".dropdown_content").hide(); click = 0; }
});

$(".more").click(function(e){
    e.stopPropagation();
});


//Detect Mobile device


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