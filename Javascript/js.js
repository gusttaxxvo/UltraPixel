document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.input');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const container = this.closest('[class*="descricao"]');
      const text = container.querySelector('.ident');
      const isShowing = text.classList.toggle('mostrar');
      
      // Suaviza a mudança de texto do botão
      setTimeout(() => {
        button.value = isShowing ? 'Ocultar' : 'Mostrar';
      }, 200);
      
      // Força repaint para evitar glitches
      void container.offsetHeight;
      
      // Ajusta o layout
      if (isShowing) {
        container.style.justifyContent = container.classList.contains('descricao') ? 'flex-start' : 'flex-end';
      } else {
        container.style.justifyContent = 'center';
      }
    });
  });
});