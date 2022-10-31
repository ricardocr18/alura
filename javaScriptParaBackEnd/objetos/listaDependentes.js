//Adicionando uma nova dependente no objeto, lembrando que dependente está como ARRAY e OBJETOS
// e usar o FILTER, para localizar o data de nascimento
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
    ]
}


cliente.dependentes.push({
    nome: "Xuxa",
    parentesco: "filha",
    dataNasc: "03/03/2003"
})

//Aqui pego o nome do dependente que esta na posição [0] do array
//console.log(cliente.dependentes[1].nome)

const filhoMaisNovo = cliente.dependentes.filter
(dependentes => dependentes.dataNasc === "01/01/2001")

console.log(filhoMaisNovo[0].nome)