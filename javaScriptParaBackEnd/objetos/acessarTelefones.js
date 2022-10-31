//Usando o FOREACH para pegarmos o numero do Telefone dentro do Array
const cliente = {
    nome: "Dede",
    idade: 18,
    cpf: "123456789",
    email: "dede@gmail.com.br",
    fones: ["09876543", "12345678"]
}

cliente.fones.forEach(fone => console.log(fone))