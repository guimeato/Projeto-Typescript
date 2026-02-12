type StatusRequisicao = "sucesso" | "erro" | "carregando";

function mostrarMensagemStatus(mensagem: StatusRequisicao){
  if(mensagem === "sucesso"){
    console.log("Requisição realizada com sucesso!")
  }
  else if(mensagem === "erro"){
    console.log("Ocorreu um erro na requisição!")
  }
  else{
    console.log("Aguarde... carregando dados!")
  }
   
}

mostrarMensagemStatus("carregando");
