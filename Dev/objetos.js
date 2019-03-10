//objeto literal

var pessoa = {}; //vazio
//adicionando propriedades(Caracteristicas do objeto) - dot notation
//obejeto.propriedade = valor;
pessoa.nome = "Renan";
pessoa.idade = "25";
//propriedades - bracket notation
//obejto["propriedade"] = valor;
pessoa["altura"] = 1.89; //outra maneira de adicionar propriedade ao objeto

//adicionando métodos(Ações) - dot notation
//objeto.metodo = function(){};
pessoa.falar = function(){
    return "bla bla bla";
};

//métodos - bracket notation
//obejto["metodo"] = function(){};
pessoa["dormir"] = function(){
    return "zzz";
}

//comandos rodados no console:
//pessoa
//{nome: "Renan", idade: "25", altura: 1.89, falar: ƒ, dormir: ƒ}
//pessoa.nome
//"Renan"
//pessoa.idade
//"25"
//pessoa.altura
//1.89
//pessoa.falar
//ƒ (){
//    return "bla bla bla";
//}
//pessoa.falar()
//"bla bla bla"
//pessoa.dormir()
//"zzz"

console.log(pessoa);