
//consulta objeto e imprime na tela, incluido o só os 3 numeros do CPF 
const cliente = {
    nome: "Dede",
    idade: 18,
    cpf: "123456789",
    email: "dede@gmail.com.br"
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`)
console.log(cliente.cpf.substring(0,3))