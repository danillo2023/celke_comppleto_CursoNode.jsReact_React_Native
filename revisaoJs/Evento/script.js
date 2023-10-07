function CarConteudo(){
    document.getElementById("conteudo").innerHTML= "Um texto é uma manifestação da linguagem. Pode ser definido como tudo aquilo que é dito por um emissor e interpretado por um receptor. Dessa forma, tudo que é interpretável é um texto. Outra forma de conceituação é pensar que tudo aquilo que produz um sentido completo, que seja uma mensagem compreensível, é um texto.";
}

function mouseOver(){
    document.getElementById("mouseAlt").innerHTML="Retire o mouse agora";
    
}
function mouseOut(){
    document.getElementById("mouseAlt").innerHTML="Passe o mouse";
}

function converTexto(){
    var nome = document.getElementById("nome");
    nome.value = nome.value.toUpperCase();
}
function validarSenha(){
    var senha= document.getElementById("senha").value;

    if(senha == ""|| senha.length <= 5){
        document.getElementById("erroSenha").innerHTML = "<span style='color: #ff0000;'> Preecha o campo senha com no minino 6 caracteres </span>";
    }else{
        document.getElementById("erroSenha").innerHTML = "<span style='color: #00ff00;'>Senha Valida";
    }
}
