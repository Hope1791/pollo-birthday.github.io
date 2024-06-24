$(document).ready(function() {
    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDuration = `${Math.random() * 2 + 4}s`;
      document.querySelector('.hearts').appendChild(heart);
      
      setTimeout(() => {
        heart.remove();
      }, 6000);
    }
  
    setInterval(createHeart, 300);
  });
  