// main.js

// 1. Olá mundo! no console
console.log('Olá mundo!');

// 2. Acrescentando ao código main.js com as seguintes informações.
// Criando um novo elemento <h1>
let novoElemento = document.createElement('h1');

// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';

// Selecionando o elemento body
let elementoBody = document.body;

// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

// 3. Deixando bonito agora
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
novoElemento.style.padding = '10px 20px';
novoElemento.style.borderRadius = '8px';
novoElemento.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
novoElemento.style.fontSize = '2em';
novoElemento.style.fontWeight = 'bold';


// 4. Usando a sua criatividade (com um toque de IA!)
// Vamos criar um contador simples que muda a cor do texto ao clicar
// e mostra uma mensagem.

// Criando um novo elemento div para o conteúdo criativo
let creativeBox = document.createElement('div');
creativeBox.className = 'creative-box'; // Adiciona uma classe para estilização

let creativeTitle = document.createElement('h2');
creativeTitle.innerText = 'Contador Interativo';
creativeTitle.style.color = '#333';
creativeBox.appendChild(creativeTitle);

let counterDisplay = document.createElement('p');
counterDisplay.innerText = 'Cliques: 0';
counterDisplay.style.fontSize = '1.5em';
counterDisplay.style.fontWeight = 'bold';
counterDisplay.style.color = '#555';
creativeBox.appendChild(counterDisplay);

let clickButton = document.createElement('button');
clickButton.innerText = 'Clique-me!';
creativeBox.appendChild(clickButton);

// Adicionando a caixa criativa ao body
elementoBody.appendChild(creativeBox);

let clickCount = 0;
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF']; // Cores para o texto

// Função para exibir mensagens na tela (substituindo alert)
function showMessage(message) {
  const messageBox = document.getElementById('messageBox');
  messageBox.innerText = message;
  messageBox.style.display = 'block'; // Mostra a caixa de mensagem
  setTimeout(() => {
    messageBox.style.display = 'none'; // Esconde a caixa de mensagem após 3 segundos
  }, 3000);
}

// Adicionando um evento de clique ao botão
clickButton.addEventListener('click', function() {
  clickCount++;
  counterDisplay.innerText = `Cliques: ${clickCount}`;

  // Muda a cor do texto do contador a cada clique
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  counterDisplay.style.color = randomColor;

  // Mostra uma mensagem na tela
  if (clickCount === 1) {
    showMessage('Primeiro clique! Bem-vindo(a)!');
  } else if (clickCount % 5 === 0) {
    showMessage(`Uau! Você clicou ${clickCount} vezes!`);
  } else {
    showMessage('Mais um clique!');
  }
});

// Exemplo de como você pode usar o console.log para depuração
console.log('Script main.js carregado e executado.');
