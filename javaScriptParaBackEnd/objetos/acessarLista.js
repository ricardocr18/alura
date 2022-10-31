// Anotações de Chaves, usando o FOREACH
const cliente = {
    nome: "Dede",
    idade: 18,
    cpf: "123456789",
    email: "dede@gmail.com.br"
}

const chaves = ["nome", "idade", "cpf", "email"]

console.log(cliente[chaves[0]])
chaves.forEach(info => console.log(cliente[info]))