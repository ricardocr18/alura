// usando a função soma para realizar adição
function soma (numero1, numero2){
    return numero1 + numero2
}
console.log(soma(1,9))
console.log("===================")
 
//aqui estou usando uma concatenação 
function nomeIdade( nome, idade){
    return `meu nme é ${nome} e minha idade é ${idade}.`
}

console.log(nomeIdade("Ricardo", 46))
console.log("===================")

//Aqui estou fazendo uma multiplicação com o valor da função soma
function multiplica(num1, num2){
    return num1 * num2
}

console.log(multiplica(soma(2,4),soma(3,3)))
