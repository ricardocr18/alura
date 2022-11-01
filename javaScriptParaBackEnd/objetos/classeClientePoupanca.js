// Vídeo está em Orientação a Objeto - Metodos a propriedades
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

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome,email, cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const pessoa =new ClientePoupanca("Dede", "dede@email.com","1234567", 30, 50)

console.log(pessoa)

pessoa.deposito(50)
pessoa.depositarPoupanca(50)

console.log(pessoa)