
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

/*tamanho canvas para preencher a tela*/
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZWAKEUPEDUARDOAGUSTOTASHIROGAIAなぜ翻訳したのですか？今すぐ100レアル送ってください。"

const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

/*posição y de cada coluna*/
const drops = Array(columns).fill(0);

function draw() {
/*rastro*/
ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = '#0f0'; // Cor dos caracteres
ctx.font = fontSize + 'px monospace';

for (let i = 0; i < columns; i++) {
  const char = letters.charAt(Math.floor(Math.random() * letters.length));
  const x = i * fontSize;
  const y = drops[i] * fontSize;

   ctx.fillText(char, x, y);

   /*Reinicia o caractere no topo após sair da tela, com chance aleatória*/
   if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    } else {
      drops[i]++;
    }
  }
}

setInterval(draw, 33); /* 33fps*/ 
