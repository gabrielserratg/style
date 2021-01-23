function copy(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Copiado com sucesso!!")
  }

function mostrar() {
  var playername = document.getElementById("playerinput").value;
  var x = '/give ' + playername + ' minecraft:id';
  document.getElementById("coding").innerHTML = x;

  var z = '/deop ' + playername;
  document.getElementById("coding2").innerHTML = z;

}
