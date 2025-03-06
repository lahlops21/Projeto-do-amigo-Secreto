//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Tarefa 1 - Implementando função para adicionar amigos
// Tarefa 1.1 - Capturar o valor do campo de entrada

let nomeAmigos = [];

function adicionarAmigo() {
  // Capturando o valor do id 'amigo' e o guardando em uma variável
  let nomeAmigo = document.getElementById("amigo").value.trim();
  
  // Tarefa 1.2 - Validando a entrada
  if (nomeAmigo == '') {
    alert("Por favor insira um nome!");
    return
  } 
  console.log(nomeAmigo);
}
