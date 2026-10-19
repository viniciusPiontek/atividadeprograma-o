
function criptografar() {
  const campo = document.getElementById('inputText');
  const output = document.getElementById('output');
  const outputText = document.getElementById('outputText');

  const input = campo.value.toUpperCase();
  let resultado = '';

  for (let i = 0; i < input.length; i++) {
    const caractere = input[i];
    const codigo = input.charCodeAt(i);

    // Verifica se o caractere está entre A e Z.
    if (codigo >= 65 && codigo <= 90) {
      // Desloca a letra três posições no alfabeto.
      const novoCodigo = ((codigo - 65 + 3) % 26) + 65;

      resultado += String.fromCharCode(novoCodigo);
    } else {
      // Preserva espaços, números e pontuação.
      resultado += caractere;
    }
  }

  outputText.textContent = resultado;
  output.hidden = false;
}

// Criptografa ao clicar no botão.
document
  .getElementById('encryptButton')
  .addEventListener('click', criptografar);

// Também permite pressionar Enter no campo de texto.
document
  .getElementById('inputText')
  .addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      criptografar();
    }
  });
