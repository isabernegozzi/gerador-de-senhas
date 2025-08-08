const numeroSenha = document.querySelector(".parametros-senha__texto");
const botaoSenha = document.querySelectorAll(".parametros-senha__botao");
const campoSenha = document.querySelector("#campo-senha");

let tamanhoSenha = 4;
numeroSenha.textContent = tamanhoSenha;

//console.log(botaoSenha);

botaoSenha[0].onclick = diminuiTamanhoSenha = () => {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
};

botaoSenha[1].onclick = aumentaTamanhoSenha = () => {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
};

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
campoSenha.value = letrasMaiusculas;
gerarSenha();

function gerarSenha() {
    let senhaGerada = "";
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.floor(Math.random() * letrasMaiusculas.length);
        //console.log(letrasMaiusculas[numeroAleatorio]);
        senhaGerada += letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senhaGerada;
}
