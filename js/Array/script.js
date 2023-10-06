var frutas = ["Abacate","Uva","Mamão","Açai","Figo","Amora"];

//contar a quantidade de itens no array
console.log("Quantidade de tipo de frutas: " + frutas.length );

//Acessar primeiro item do array
console.log("Primeiro tipo de fruta: " + frutas[0]);


console.log("Acessar um item do array: " + frutas[2]);

//Acessar ultimo item  do Array
console.log("Último tipo de frutas: " + frutas[frutas.length-1]);

//Adicionar um item ao final do array


//Adcionar ao inicio do Array mais um item
frutas.unshift("Kiwi");

//Remover um item do final do Array
frutas.pop();

//Remover do inicio do Array
frutas.shift();

//remover um item pela posiçao do indice
//frutas.splice(pos, n); (n) define o numero de itens a ser remover
//A partir da posiçao (pos) em diereçao ao fim da array
frutas.splice(2, 2);

//Ler o um Array
frutas.forEach(function(item,indice, array){
    console.log( item, indice);
});

var carros =["Voyage", "Virtus", "A1", "A2", "A3"];
//Ler o um Array
carros.forEach(function(item,indice, array){
    console.log( item, indice);
});

carros.push("A4");