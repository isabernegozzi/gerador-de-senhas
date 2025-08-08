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
function classificaSenha(tamanhoAlfabeto) {
  let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
  console.log(entropia);

  forcaSenha.classList.remove("fraca", "media", "forte");
  if (entropia > 57) {
    forcaSenha.classList.add("forte");
  } else if (entropia > 35 && entropia <= 57) {
    forcaSenha.classList.add("media");
  } else if (entropia <= 35) {
    forcaSenha.classList.add("fraca");
  }
  const valorEntropia = document.getElementById("entropia");
  valorEntropia.textContent = (
    2 ** Math.floor(entropia) /
    (100e6 * 60 * 60 * 24)
  ).toFixed(2);
}
