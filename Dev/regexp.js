console.log ("===Expressoes Regulares===")
//CEP: ^[0-9]{5}\-?[0-9]{3}$
//EMAIL: ^[A-z0-9\.\-]{1,}\@\w+\.[A-z]{2,4}(\.[A-z]{2,4})?$

//Regx Literal
//var input = prompt ("Digite seu Cep");
var input = "05171-000";
console.log(
    /^[0-9]{5}\-?[0-9]{3}$/.test(input) //retorna true ou false para a expressao
);

console.log(
    /^[0-9]{5}\-?[0-9]{3}$/.exec(input) //retorna um array com o que vc digitou
);

console.log(
    input.match(/^[0-9]{5}\-?[0-9]{3}$/)
);