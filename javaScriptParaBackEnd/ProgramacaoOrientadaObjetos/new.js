function User(nome, email){
    this.nome = nome,
    this.email = email

    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`
    }
}

//aqui na linha de baixo estamos usando uma function construtor com o NEW
//User será o prototipo da nova const que foi criada novoUser
// const novoUser = new User("Mussum", "mussum@email.com")
// console.log(novoUser.exibirInfos())

function Admin(role){
User.call(this, 'Zacarias', 'zacarias@email.com')
this.role = role || 'estudante'
}