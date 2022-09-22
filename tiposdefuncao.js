//1º forma de declarar: função tipo simples;
console.log(" ")

function simples(){

    console.log("1) A função com sintaxe simples: deverá ser invocada ou chamada para ser executada, por exemplo, neste formato 'nomeDaVariável();'")
    }
    simples() // => A função deverá ser chamada para ser executada.
    console.log(" ")

    //*2º forma de declarar: função tipo anônima
    
    
    var calc = function (a,b)
    {return a+b;}
    console.log("2) A função do tipo anônima: é armazenada dentro de uma variável chamada 'calc' e o nome da função fica suprimida;")
    console.log('O resultado da soma é = ' + calc(5,8))
    console.log(" ")
    
    //*3º forma de declarar: função tipo arrow functions(ou função de seta)
    
    const mult = (a,b) => a*b
    console.log('3) A arrow functions: simplifica a expressão eliminando o uso da palavra "function", "return" e das "chaves", entretanto, utiliza o "=>" na expressão;')
    console.log('O resultado da multiplicação é', + mult(5,9)) 
    console.log(" ")
    console.log("=> Existem outras sintaxes para as funções, porém, estas são para atender o que se pede no enunciado.")

    console.log(" ")
   
    module.export = simples