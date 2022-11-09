const user = {
    nome: "Dede",
    email: "dede@email.com",
    nascimento: "2001/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function (){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Didi",
    email: "didi@email.com",
    nascimento: "2002/02/02",
    role: "admin",
    criarCurso(){
        console.log('Curso criado')
    }
}

//nessa linha abaixo, vinculamos o exibirInfos de const user, com o const admin
Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()

//user.exibirInfos()