console.log("===Controlando Escopo===");

//var empresa = null;            
//var soma = function(){};

//variavel e função vão para o objeto Window, ou seja, entrará em conflito 
//com meu outro arquivo que existe a mesma variavel e função

function teste(){ //declarando variavel dentro da funcao, ele garante o controle da variavel, fazendo com que nao caia no escopo global(Window). Assim nao entrará em conflito
    var company = "Caelum";
    console.log(company);
}
teste();