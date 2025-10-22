const body = document.body;

const btnModoEscuro = document.getElementById("modoEscuro");
if (btnModoEscuro) {
  btnModoEscuro.addEventListener("click", () => {
    const ativando = !body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro", ativando);
    body.classList.remove("alto-contraste");

    localStorage.setItem("modoEscuroAtivo", ativando);
    localStorage.setItem("contrasteAtivo", false);
  });
}

const btnContraste = document.getElementById("altoContraste");
if (btnContraste) {
  btnContraste.addEventListener("click", () => {
    const ativando = !body.classList.contains("alto-contraste");
    body.classList.toggle("alto-contraste", ativando);
    body.classList.remove("modo-escuro");

    localStorage.setItem("contrasteAtivo", ativando);
    localStorage.setItem("modoEscuroAtivo", false);
  });
}

let tamanhoFonte = parseInt(localStorage.getItem("tamanhoFonte")) || 16;
body.style.fontSize = tamanhoFonte + "px";

const btnAumentar = document.getElementById("aumentarFonte");
const btnDiminuir = document.getElementById("diminuirFonte");

if (btnAumentar) {
  btnAumentar.addEventListener("click", () => {
    tamanhoFonte = Math.min(tamanhoFonte + 1, 24);
    body.style.fontSize = tamanhoFonte + "px";
    localStorage.setItem("tamanhoFonte", tamanhoFonte);
  });
}

if (btnDiminuir) {
  btnDiminuir.addEventListener("click", () => {
    tamanhoFonte = Math.max(tamanhoFonte - 1, 12);
    body.style.fontSize = tamanhoFonte + "px";
    localStorage.setItem("tamanhoFonte", tamanhoFonte);
  });
}

window.addEventListener("load", () => {
  if (localStorage.getItem("modoEscuroAtivo") === "true") {
    body.classList.add("modo-escuro");
    body.classList.remove("alto-contraste");
  } else if (localStorage.getItem("contrasteAtivo") === "true") {
    body.classList.add("alto-contraste");
    body.classList.remove("modo-escuro");
  }

  const fonteSalva = parseInt(localStorage.getItem("tamanhoFonte"));
  if (fonteSalva) body.style.fontSize = fonteSalva + "px";
});

const form = document.getElementById("formContato");
if (form) {
  form.addEventListener("submit", (e) => {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      e.preventDefault();
      return;
    }

    const regexEmail = /\S+@\S+\.\S+/;
    if (!regexEmail.test(email)) {
      alert("Digite um e-mail válido.");
      e.preventDefault();
    }
  });
}
