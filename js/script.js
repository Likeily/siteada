document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
    alert("Prontinho! você receberá as novidades por email!")
  }else{
    alert("Por favor, verifique se os campos preenchidos estão com os valores corretos.")
  }
}