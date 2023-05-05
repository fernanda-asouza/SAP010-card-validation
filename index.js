import validator from "./validator.js";

document.getElementById("botao").addEventListener("click", verificacartao);

function verificacartao() {
  const cardNumber = document.getElementById("cardNumber").value;

  if (cardNumber === "") {
    alert("Por favor, insira o número do seu cartão.");
    return;
  }

  const cartaoValido = validator.isValid(cardNumber);
  const cardMask = validator.maskify(cardNumber);
  if (cartaoValido) {
    alert("O cartão número: " + cardMask + " é válido!");
  } else {
    alert("O cartão número: " + cardMask + " é inválido!");
  }
}
