const imagens = [
    "Assets/img/about.png",
    "Assets/img/pizza-mussarela.jpg",
    "Assets/img/pizza-brocolis.jpg"
  ];
  
  const imagemElemento = document.querySelector(".carrossel-imagem");
  let indexAtual = 0;
  
  // Função para trocar a imagem com efeito de fade
  function trocarImagem() {
    // Começa o fade-out (desaparecendo)
    imagemElemento.style.transition = 'opacity 1s ease';
    imagemElemento.style.opacity = 0;
  
    setTimeout(() => {
      indexAtual = (indexAtual + 1) % imagens.length; // Alterna entre os índices
      imagemElemento.src = imagens[indexAtual];
      
      // Após a troca da imagem, começa o fade-in (aparecendo)
      imagemElemento.style.opacity = 1;
    }, 1000); // Tempo para o fade-out acontecer antes de trocar a imagem
  }
  
  // Funções para navegação com as setas
  function imagemAnterior() {
    indexAtual = (indexAtual - 1 + imagens.length) % imagens.length; // Retrocede no índice
    imagemElemento.style.transition = 'opacity 1s ease';
    imagemElemento.style.opacity = 0;
  
    setTimeout(() => {
      imagemElemento.src = imagens[indexAtual];
      imagemElemento.style.opacity = 1; // Volta a imagem com fade-in
    }, 1000);
  }
  
  function imagemProxima() {
    trocarImagem();
  }
  
  // Troca a imagem automaticamente a cada 3 segundos
  setInterval(trocarImagem, 3000);
  
  // Adiciona os eventos de clique nas setas
  document.querySelector(".seta-esquerda").addEventListener("click", imagemAnterior);
  document.querySelector(".seta-direita").addEventListener("click", imagemProxima);
  