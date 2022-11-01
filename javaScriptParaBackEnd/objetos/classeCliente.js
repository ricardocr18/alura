//Utilizando Classe 
class Cliente {
    constructor(nome, cpf, email, saldo) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }

    deposito = function (valor) {
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    } 
}

const pessoa = new Cliente("Dede", "dede@email.com", "123456789", 100)

console.log(pessoa)