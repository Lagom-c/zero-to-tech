let count = 0;
let counterVisible = false;
const emojis = ['🚀', '💻', '🌟', '🎉', '🔥', '⚡', '🎨', '📚'];
let emojiIndex = 0;

function showMessage() {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = '恭喜你！这是你的第一个交互式网页！继续加油！';
  messageDiv.className = 'success';
  messageDiv.style.display = 'block';

  setTimeout(() => {
    messageDiv.style.display = 'none';
  }, 3000);
}

function toggleCounter() {
  const counterDiv = document.getElementById('counter');
  counterVisible = !counterVisible;

  if (counterVisible) {
    counterDiv.style.display = 'block';
    count++;
    counterDiv.textContent = count;
  } else {
    counterDiv.style.display = 'none';
  }
}

function changeEmoji() {
  emojiIndex = (emojiIndex + 1) % emojis.length;
  document.querySelector('.emoji').textContent = emojis[emojiIndex];

  const messageDiv = document.getElementById('message');
  messageDiv.textContent = `已切换到表情: ${emojis[emojiIndex]}`;
  messageDiv.className = 'info';
  messageDiv.style.display = 'block';

  setTimeout(() => {
    messageDiv.style.display = 'none';
  }, 2000);
}

document.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    e.preventDefault();
    count++;
    const counterDiv = document.getElementById('counter');
    if (!counterVisible) {
      counterVisible = true;
      counterDiv.style.display = 'block';
    }
    counterDiv.textContent = count;
  }
});
