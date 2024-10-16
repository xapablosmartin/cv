

$(document).ready(function() {
  // Fonction pour sélectionner un élément avec jQuery
  var select = function(s) {
      return $(s);
  };

  // Fonction pour obtenir un nombre aléatoire entre deux valeurs
  function randomBetween(min, max) {
      var number = Math.floor(Math.random() * (max - min + 1) + min);
      return number !== 0 ? number : 0.5;
  }

  var tl = new TimelineMax();

  // Boucle pour animer les bulles
  for (var i = 0; i < 11; i++) { 
      var bubble = select('.bubble' + i);
      if (bubble.length) { // Vérifie si l'élément existe
          var t = TweenMax.to(bubble, randomBetween(1, 1.5), {
              x: randomBetween(12, 15) * (randomBetween(-1, 1)),
              y: randomBetween(12, 15) * (randomBetween(-1, 1)),
              repeat: -1,
              repeatDelay: randomBetween(0.2, 0.5),
              yoyo: true,
              ease: Elastic.easeOut.config(1, 0.5)
          });

          tl.add(t, (i + 1) / 0.6);
      } else {
          console.error("L'élément avec la classe 'bubble" + i + "' n'existe pas.");
      }
  }

  tl.seek(50);


  select('.language-item').each(function() {
    const level = parseInt(select(this).data('level'));
    const $languageLevelContainer = select(this).find('.language-level');

    for (let i = 1; i <= 5; i++) {
      const $bubble = $('<span>').addClass('bubble');
      if (i <= level) {
        $bubble.addClass('filled');
      }
      $languageLevelContainer.append($bubble);
    }
  });


  

//   select('#print-button').on('click', function() {
//     window.print(); 
// });

});
