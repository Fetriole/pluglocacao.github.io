//------------------------------------------------------------------------------------------------------------------------------


//botoes do id="quem-somos"
// Função para redirecionar para a âncora "contato" na mesma página
function redirectToContato() {
    window.location.href = '#contato';
  }
  // Função para redirecionar para a página "sobre-nos.html"
  function redirectToSobreNos() {
    window.location.href = 'sobre-nos.html';
  }
  
  
  //------------------------------------------------------------------------------------------------------------------------------
  

  $(document).ready(function() {
    $('.shop').slick({
      slidesToShow: 3, // Defina o número de produtos visíveis por slide
      slidesToScroll: 1,
      arrows: true, //Exibe as setas de navegação para avançar e retroceder as imagens
      prevArrow: '<button type="button" class="slick-prev" id= "slick-prev-shop">previous-button</button>', //Define o código HTML para o botão de navegação "Previous"
      nextArrow: '<button type="button" class="slick-next" id= "slick-next-shop">next-button</button>',//Define o código HTML para o botão de navegação "Next".
      responsive: [
        {
          breakpoint: 768, // A partir desta largura de tela, o número de produtos visíveis será ajustado
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    setInterval(function() {
      $('.shop').slick("slickNext"); // Avança para o próximo slide
    }, 5000); // Define o intervalo de 5 segundos
  });

