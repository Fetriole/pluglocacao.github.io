$(document).ready(function() {
  $('.slider').slick({ //eleciona o elemento HTML com a classe "slider" e aplica as configurações do carrossel através do plugin Slick
    arrows: true, //Exibe as setas de navegação para avançar e retroceder as imagens.
    dots: true, //Exibe os marcadores para indicar a posição atual do carrossel.
    infinite: true, //Define a velocidade da transição das imagens em milissegundos
    speed: 500, //Define a velocidade da transição das imagens em milissegundos
    fade: true, // Faz com que as imagens desapareçam gradualmente ao serem trocadas
    cssEase: 'linear', //Define a função de easing utilizada para as transições de imagens.
    autoplay: true, //Habilita a reprodução automática do carrossel.
    autoplaySpeed: 2000, //Define o intervalo de tempo entre as transições automáticas das imagens em milissegundos.
    prevArrow: '<button type="button" class="slick-prev">Previous</button>', //Define o código HTML para o botão de navegação "Previous"
    nextArrow: '<button type="button" class="slick-next">Next</button>'//Define o código HTML para o botão de navegação "Next".
  });
});

//------------------------------------------------------------------------------------------------------------------------------

  // Inicializar o carrossel quando o documento estiver pronto
  document.addEventListener('DOMContentLoaded', function() {
    // Seletor do carrossel
    var carousel = document.querySelector('#carouselExampleControls');

    // Criar uma instância do carrossel usando a biblioteca Bootstrap Carousel
    var carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 3000, // Intervalo de tempo entre os slides (3 segundos neste exemplo)
      wrap: true // Permitir a rolagem circular do carrossel
    });
  });