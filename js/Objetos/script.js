var cadeira = {
    cor:"Preto",
    altura:1.18,
    largura:74,
    profundiade:64,
    
};
document.write("Cor da cadeira " + cadeira.cor + "<br>");
document.write("Altura da cadeira " + cadeira.altura + "<br><hr>");

cadeira.cor = "Branca";
document.write("Cor da cadeira " + cadeira.cor + "<br><hr>");

cadeira.peso = 17;
document.write("Peso da cadeira " + cadeira.peso +"<br><hr>" );

document.write("Profundiade da cadeira " + cadeira.profundiade +"<br><hr>" );
delete cadeira.profundiade;
document.write("Profundiade da cadeira " + cadeira.profundiade +"<br><hr>" );

var mesa= new Object();
mesa.cor = "Preta";
mesa.largura = 220;
document.write("Cor da mesa " + mesa.cor + ".<br>");
document.write("Largura da mesa " + mesa.largura + "cm .<br>");