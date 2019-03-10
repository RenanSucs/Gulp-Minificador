console.log("===Paradgmas===");

var empresa = "Alura"; //síntaxe literal
console.log(empresa, typeof empresa, empresa.constructor); //.constructor mostra qual função criou o dado

var company = new String("Alura"); //Síntaxe OOP(Orientada a Objeto)
console.log(company, typeof company);

console.dir(String.prototype); //Mostra todas as funções que manipulam string