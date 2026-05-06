function start() {
    var audio = document.getElementById('audio-retro');
    
    // Definir o volume para 30% (0.3)
    audio.volume = 1.0;
    
    // Verificar se o áudio está pausado antes de tocar
    if (audio.paused) {
        audio.play(); // Inicia a reprodução do áudio
    }
}
  document.getElementById('game-music').addEventListener('change', function(){
    const player = document.getElementById('player'); 
    if(this.value) {
      player.src = this.value;
      player.play();
    } else {
      player.pause();
      player.src = '';
    }
  });

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const container = this.closest('.jogo-retro');
            const detalhes = container.querySelector('.detalhes');

            if (!detalhes) return;

            const isHidden = detalhes.style.display === 'none' || detalhes.style.display === '';

            detalhes.style.display = isHidden ? 'block' : 'none';
            this.value = isHidden ? 'Ocultar' : 'Mostrar';
        });
    });
});


window.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector('.slider');
  const sliderContent = slider.innerHTML;
  // Duplica o conteúdo do slider para looping infinito
  slider.innerHTML += sliderContent;
});

