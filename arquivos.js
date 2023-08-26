function caucular() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var c = parseFloat(document.getElementById("c").value);
  var delta = b * b - 4 * a * c;
  console.log(Math.sqrt(delta));

  if (delta < 0) {
    var resposta = document.getElementById("resultado");
    resposta.innerHTML =
      "Essa equação não possui raizes reias,delta igual à " + delta;
  } else {
    var p1 = -1 * b + Math.sqrt(delta);
    var p2 = -1 * b - Math.sqrt(delta);
    var base = 2 * a;
    var linha = p1 / base;
    var linhas = p2 / base;

    var resposta = document.getElementById("resultado");
    resposta.innerHTML = "Seu conjunto solução é " + linha + "," + linhas;
  }
}
  
