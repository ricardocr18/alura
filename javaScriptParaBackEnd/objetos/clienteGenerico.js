// PTOTOTYPE - usando uma herança de informações pois PESSOA foi criada través de CLIENTE
function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.deposito = function(valor){
        this.saldo += valor
    }
}
const pessoa = new Cliente("Ricardo", "12345667", "ricardo@gmail.com", 200)

console.log(pessoa)