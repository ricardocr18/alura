//Famos criar classes aqui

export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo

    //A colocação de # deixa os metodos privados
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    //Aqui estou pegando o nome pelo metodo GET
    get nome() {
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get nasciment() {
        return this.#bascimento
    }
    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    exibirInfos() {
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
