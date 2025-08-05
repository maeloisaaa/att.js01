// main.js
console.log('Olá mundo!');
let novoElemento = document.createElement('h1');
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
let elementoBody = document.body;
elementoBody.appendChild(novoElemento);
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
novoElemento.style.padding = '10px 20px';
novoElemento.style.borderRadius = '8px';
novoElemento.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
novoElemento.style.fontSize = '2em';
novoElemento.style.fontWeight = 'bold';
let creativeBox = document.createElement('div');
creativeBox.className = 'creative-box';
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
elementoBody.appendChild(creativeBox);
let clickCount = 0;
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF'];
function showMessage(message) {
  const messageBox = document.getElementById('messageBox');
  messageBox.innerText = message;
  messageBox.style.display = 'block';
  setTimeout(() => {
    messageBox.style.display = 'none';
  }, 3000);
}
clickButton.addEventListener('click', function() {
  clickCount++;
  counterDisplay.innerText = `Cliques: ${clickCount}`;
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  counterDisplay.style.color = randomColor;
  if (clickCount === 1) {
    showMessage('Primeiro clique! Bem-vindo(a)!');
  } else if (clickCount % 5 === 0) {
    showMessage(`Uau! Você clicou ${clickCount} vezes!`);
  } else {
    showMessage('Mais um clique!');
  }
});
function injectStarStyles() {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fallAndFade {
      0% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      100% {
        opacity: 0;
        transform: translateY(200px) scale(0.5);
      }
    }
    .star {
      position: absolute;
      background-color: yellow;
      border-radius: 50%;
      animation: fallAndFade 2s forwards;
      pointer-events: none;
      z-index: 9999;
    }
  `;
  document.head.appendChild(style);
}
injectStarStyles();
function createStar(x, y) {
  const star = document.createElement('div');
  star.className = 'star';
  const size = Math.random() * 5 + 5;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${x - size / 2}px`;
  star.style.top = `${y - size / 2}px`;
  document.body.appendChild(star);
  star.addEventListener('animationend', () => {
    star.remove();
  });
}
document.addEventListener('click', function(event) {
  const randomBackgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomBackgroundColor;
  const numberOfStars = 15;
  for (let i = 0; i < numberOfStars; i++) {
    const offsetX = (Math.random() - 0.5) * 100;
    const offsetY = (Math.random() - 0.5) * 100;
    createStar(event.clientX + offsetX, event.clientY + offsetY);
  }
});
console.log('Script main.js carregado e executado.');
