//inscrita normal da função
function apreentar(nome) {
    return `meu nome é ${nome}`
}

//Agora com arrowFunction
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 +num2;

const somaNumeroPequeno = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "somente nmeros de 1 a 9"
    }else {
        return num1 + num2
    }
}