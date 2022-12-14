var paleta = document.querySelector('input')
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle='lightgrey';
pincel.fillRect(0,0,1200,600);
var desenha = false; // False para que o mouse não desenhe sem estar pressionado


tela.onmousemove = function (evento){
    if(desenha){
        var x =   evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        pincel.fillStyle= paleta.value;
        pincel.beginPath();
        pincel.arc(x,y,10,0,2 * 3.14);
        pincel.fill();
    }

    console.log(x + "," + y);
}

tela.onmousedown = function(){
    desenha = true;
}
tela.onmouseup = function(){
    desenha = false;
}
