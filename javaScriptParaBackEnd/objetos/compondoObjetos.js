// Cliar um dependendte dentro do objeto e mudar o dados de um dependende
const cliente = {
    nome: "Dede",
    idade: 18,
    cpf: "123456789",
    email: "dede@gmail.com.br",
    fones: ["09876543", "12345678"]
}

cliente.dependentes = {
    nome: "Didi",
    parentesco: "filho",
    dataNasc: "01/01/2001"
}

cliente.dependentes.nome = "Didi Moco"

console.log(cliente)