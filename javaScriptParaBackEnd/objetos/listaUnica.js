// Aqui imprimir um lista única de dependentes usando o spread operator

const clientes = [
    {
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
    },
    {
        nome: "Xuxa",
        idade: 30,
        cpf: "098765432",
        email: "xuxa@gmail.com.br",
        fones: ["567890", "43210"],
        dependentes: [
            {
                nome: "Paquita",
                parentesco: "filha",
                dataNasc: "02/10/1994"
            },
        ]
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.log(listaDependentes)