console.log("===Module-Pattern===");//Função Imediata (I.I.F.E)
    var MODULE = (function(){ //Declara a função anonima dentro da variavel para acessar de fora da função
    var APP = "Demo"; //Se retirar o "VAR" ela cai dentro do escopo global, vazando ela!
    var box = {}; //Objeto vazio
    box.count = 0;

    box.addCount = function(){
        return box.count += 1;
    };

    box.resetCount = function(){
        return box.count = 0;
    };

    return {add:box.addCount, reset:box.resetCount};
    console.log(APP,box);
})(); //expressao de funcao, para nao dar sintax error
//Abrir e fechar parenteses para executar a funcao anonima
//Não vou ecnontrar a váriavel no console, pois ele nao foi para o objeto Window, fica apenas dentro da funcao!



//                      OBJ BOX
//        Propriedade:          métodos:
//        Count                 addcount()
//                              resetCount()

//Estudo http://blog.caelum.com.br/organize-seu-codigo-javascript-de-maneira-facil/