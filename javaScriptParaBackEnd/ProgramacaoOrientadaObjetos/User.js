//Famos criar classes aqui

export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo

    //A colocação de # deixa os metodos privados
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    #montaObjUser(){
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    exibirInfos(){
        const objUser = this.#montaObjUser()
        return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}
        ${objUser.ativo}`
    }
}

//AQUI FIZ O TESTE PARA VALIDAR A CLASSE CRIADA ACIMA 😁
// const novoUser = new User('Dede', 'dede@email.com', '2001-01-01')
// console.log(novoUser)
// console.log("============")
// console.log(novoUser.exibirInfo())
