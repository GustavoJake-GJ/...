function caucular() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
    var delta = b * b - 4 * a * c;
    if (delta < 0) {
      var resposta = document.getElementById("resultado");
      resposta.innerHTML = "Essa equação não possui raizes reias ";
    } else {
      var linha = (-1 * b + Math.sqrt(delta)) / 2;
      var linhas = (-1 * b - Math.sqrt(delta)) / 2;
  
      var resposta = document.getElementById("resultado");
      resposta.innerHTML = "Seu conjunto solução é " + linha + "," + linhas;
    }
  }
  
