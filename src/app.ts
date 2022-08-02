let button = document.getElementById("button");
let input1 = document.getElementById("input1") as HTMLInputElement;
let input2 = document.getElementById("input2") as HTMLInputElement;
let input3 = document.getElementById("input3") as HTMLInputElement;

let espaços = ' '

function imprimirDados(nome: string, sobrenome: string, contato: number) {

    return nome + espaços + sobrenome + espaços + contato
}

let resultado = document.getElementById("resultado")

if(button) {
    button.addEventListener('click', () => {
        if (input1 && input2 && input3) {
            alert(imprimirDados(input1.value, input2.value, Number(input3.value)))
        }
    })
}