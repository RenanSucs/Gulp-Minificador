console.log("===Hoisting===")

var escopo = "global"; //ESCOPO GLOBAL
//Função tem seu escopo, de dentro dela consigo acessar o escopo global, de cima
//cada função é uma caixinha com seu próprio escopo
function testeEscopo(){ //ESCOPO LOCAL
    console.log(escopo.toUpperCase());
    var escopo = "local";
    console.log(escopo.toUpperCase()); //ele da erro pq procura a variavel escopo dentro da funcao e nao encontra
}
//Tudo que fizer dentro da função, ficará apenas lá dentro.

testeEscopo();

//closure = escopo mais amplo, sendo usado no escopo local