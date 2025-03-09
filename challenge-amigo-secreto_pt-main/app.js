//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Tarefa 1 - Implementando função para adicionar amigos
// Tarefa 1.1 - Capturar o valor do campo de entrada

let listaAmigos = [];

function adicionarAmigo() {
  // Capturando o valor do id 'amigo' e o guardando em uma variável
  let nomeAmigo = document.getElementById("amigo").value.trim();

  // Tarefa 1.2 - Validando a entrada
  if (nomeAmigo == "") {
    alert("Por favor insira um nome!");
    return;
  } else {
    // Tarefa 1.3 - Capturando nomes válidos e os colocando no Array
    listaAmigos.push(nomeAmigo);
  }
  // Tarefa 1.4 - Limpando o campo de entrada
  document.getElementById("amigo").value = "";
  atualizarLista();
}

function atualizarLista() {
  let nomesDaLista = document.getElementById("listaAmigos");
  nomesDaLista.innerHTML = "";

  // 3 - Percorre o array listaAmigos
  for (let i = 0; i < listaAmigos.length; i++) {
    let item = document.createElement("li"); // Cria um elemento <li>
    item.textContent = listaAmigos[i]; // Define o texto como o nome do amigo
    nomesDaLista.appendChild(item); // Adiciona o <li> na <ul>

    console.log(listaAmigos);
    console.log(nomesDaLista);
  }
}

function sortearAmigo() {
  if (listaAmigos.length == 0) {
    alert("Nenhum nome adicionado ainda! Adicione um nome e tente novamente");
    return;
  }

  let itemSorteado = Math.floor(Math.random() * listaAmigos.length);
  console.log("Índice Sorteado:", itemSorteado);

  let amigoSorteado = listaAmigos[itemSorteado];
  console.log(amigoSorteado);
}
