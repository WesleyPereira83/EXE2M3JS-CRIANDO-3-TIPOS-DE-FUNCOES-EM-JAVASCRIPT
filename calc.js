var Simples = require("./tiposdefuncao");

console.log(' ') 
console.log('Vamos agora para a CALCULADORA:')
console.log(' ') 

const readlineSync = require('readline-sync')

var a = readlineSync.question('Escreva o primeiro numero? ')
console.log(' ') 
var operador = readlineSync.question('Qual a operacao deseja realizar: +, -, *, / ? ')
console.log(' ') 
var b = readlineSync.question('Escreva o segundo numero? ')
console.log(' ') 

if (operador === "+") {
    
    var SomaFunc = require("./soma");
    console.log(SomaFunc(a,b)) 

} else if (operador === "-"){
    var SubFunc = require("./subtracao");
    console.log(SubFunc(a,b)) 

} else if (operador === "*"){
    var MultFunc = require("./multiplicacao");
    console.log(MultFunc(a,b))
    
} else {
    var DivFunc = require("./divisao");
    console.log(DivFunc(a,b))
}

