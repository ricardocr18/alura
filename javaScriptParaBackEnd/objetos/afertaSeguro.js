// aqui vamos verododcar o nome que tem dependente para oferecer um Seguro de Vida
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

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log (`oferta de seguro de vida para ${obj.nome}`)
    }
}

oferecerSeguro(cliente)

//Aqui estou pegando só os valores
console.log(Object.values(cliente))