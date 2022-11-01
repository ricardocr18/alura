//prototype acessar dentro e mudar os valores

function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.deposito = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo,saldoPoup)
{
    Cliente.call(this,nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const pessoa = new ClientePoupanca("Xuxa", "123456", "xuxa@email.com", 100, 200)

console.log(pessoa)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

pessoa.depositarPoup(50)
console.log(pessoa.saldoPoup)
