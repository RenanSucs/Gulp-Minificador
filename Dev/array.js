console.log("===Array===");

//Síntaxe literal
var carros = ["Ferrari","Fusca","T40"]; 
console.log(carros.constructor);//verifica qual foi o construtor da variável
console.dir(Array.prototype); //comandos que podem ser utilizado com o Array
carros.push("Gol"); //adiciona ao final do array
carros.unshift("Golf"); //adiciona ao começo do array
carros.splice(2,0,"x6"); //adiciona o x6 na posição 2, sem remover nenhum carro
carros.splice(4,1,"Up"); //vai na posição 4, remove o 1 item e adiciona o "Up" no lugar dele
carros.sort(); //Organiza a lista por ordem alfabética
carros.reverse(); //Orderm alfabetica reversa
//carros.pop(); //Apaga o ultimo carro da lista
//carros.shift(); //Apaga o primeiro carro da lista
console.log(carros.length);//quantidade de elementos que tem no array

carros.forEach(function(carro, posição){ //forEach percorre cada elemento da lista e executa a função 6 vezes(Array(6 itens))
    console.log("chamou", carro, posição);
});

console.log(carros);


//Síntaxe OOP
var cars = new Array();