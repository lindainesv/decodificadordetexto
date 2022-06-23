var entradain = document.querySelector("#txt-in");
var entradaout = document.querySelector("#txt-out");
var mensagem = document.getElementById("msg");
var button1 = document.querySelector(".botaocriptador");
button1.onclick = criptografar;
var button2 = document.querySelector(".botaodescriptador");
button2.onclick = descriptografar;
document.getElementById("none").innerHTML = "";
entradain.focus();

function criptografar() {
  if (entradain.value.length == 0) {
    document.getElementById("none").innerHTML =
      '<h2 id="none">Nenhuma mensagem encontrada</h2>';
    entradain.focus();
  } else {
    document.getElementById("none").innerHTML = "";
    document.querySelector("img.icone").style.display = "none";
    var text = entradain.value;
    var txt = text.replace(/e/gim, "enter");
    var txt = txt.replace(/i/gim, "imes");
    var txt = txt.replace(/a/gim, "ai");
    var txt = txt.replace(/o/gim, "ober");
    var txt = txt.replace(/u/gim, "ufat");
    document.getElementById("txt-out").innerHTML = `${txt}`;
    document.getElementById("copiar").innerHTML =
      '<button class="botao copiar" onclick="copiar()">Copiar</button>';
  }
}

function descriptografar() {
  if (entradain.value.length == 0) {
    document.getElementById("none").innerHTML =
      ' <h2 id="none">Nenhuma mensagem encontrada</h2>';
    document.querySelector("img.icone").style.display;
    entradain.focus();
  } else {
    document.getElementById("none").innerHTML = "";
    document.querySelector("img.icone").style.display = "none";
    document.getElementById("txt-in").innerHTML = "";
    var text = entradain.value;
    var txt = text.replace(/enter/gim, "e");
    txt = txt.replace(/imes/gim, "i");
    txt = txt.replace(/ai/gim, "a");
    txt = txt.replace(/ober/gim, "o");
    txt = txt.replace(/ufat/gim, "u");
    document.getElementById("txt-out").innerHTML = `${txt}`;
    document.getElementById("copiar").innerHTML =
      '<button class="botao copiar" onclick="copiar()">Copiar</button>';
  }
}

function copiar() {
  document.querySelector("#txt-out").select();
  document.execCommand("copy");
  mensagem.innerHTML = "Copiado para a área de transferência.";
  document.querySelector("#txt-in").value = "";
}

function checkText(text) {
  let check = text.search(/^[a-z ]+$/); //validação regex
  if (text != "") {
    if (check == -1) {
      mensagemDeErro("Somente caracteres minúsculos e sem acento são válidos");
    } else {
      changeLeftContent("none", "flex");
    }
  } else {
    mensagemDeErro("Nenhuma mensagem foi encontrada");
  }
}
function mensagemDeErro(msg) {
  alert(`Erro: ${msg}`);
  changeLeftContent("block", "none");
  document.querySelector(".msg").innerHTML = msg;
}
