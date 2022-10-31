//Aqui vamos puxar um relatorio do objeto usando o TYPEOF para pegarmos só os valores de cada chave(keys)

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

let relatorio="";
for (let info in cliente){
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue
    }else {
        relatorio += `
        ${info}  ==> ${cliente[info]}
        `
    }
}

console.log(relatorio)