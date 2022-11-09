//TRÊS FORMAS DE FAZER O PROTOTIPO E CONSTRUTORA


// function User(nome, email){
//     this.nome = nome,
//     this.email = email

//     this.exibirInfos = function(){
//         return `${this.nome}, ${this.email}`
//     }
// }

//aqui na linha de baixo estamos usando uma function construtor com o NEW
//User será o prototipo da nova const que foi criada novoUser
// const novoUser = new User("Mussum", "mussum@email.com")
// console.log(novoUser.exibirInfos())

// function Admin(role){
// User.call(this, 'Zacarias', 'zacarias@email.com')
// this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)

//===========================================================

// const user = { 
//     exibirInfos: function(nome){
//         return nome
//     }
// }

// const novoUser = Object.create(user)
// console.log(novoUser.exibirInfos("Mussum"))
// console.log(user.isPrototypeOf(novoUser)) //aqui eu apeas estou confirmando que novoUser usa o User e retorna TRUE

//====================================================

const user = { 
    init: function(nome, email){
        this.nome = nome,
        this.email = email
    },

    exibirInfos: function(){
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Mussum ', "mussum@email.com")
console.log(novoUser.exibirInfos())