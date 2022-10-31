// ]fazendo um deposito uando um METODO / FUNCTION dentro do objeto
const cliente = {
    nome: "Dede",
    idade: 18,
    cpf: "123456789",
    email: "dede@gmail.com.br",
    fones: ["09876543", "12345678"],
    dependentes: [
        {
            nome: "Didi Moco",
            parentesco: "filho",
            dataNasc: "01/01/2001"
        },
        {
            nome: "Mussum",
            parentesco: "filho",
            dataNasc: "02/02/2001"
        }
    ],
    saldo: 100,

    depositar: function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(50)
console.log(cliente.saldo)