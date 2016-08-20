$(document).ready(function() {

  var chevronDown = function() {
    $(".chevron-down").css("top", $("#navImage").height());
  };
  setInterval(chevronDown, 1);

  var block1 = function() {
    $("#block1").css("top", $("#navImage").height());
  };
  setInterval(block1, 1);

  var block2 = function() {
    $("#block2").css("top", $("#navImage").height());
  };
  setInterval(block2, 1);

  $(".chevron-down").click(function() {
    $('html, body').animate({
    scrollTop: $("#block1").offset().top
    }, 800);
  });

  $(".myProjectsButton").click(function() {
    $('html, body').animate({
      scrollTop: $("#block1").offset().top
    }, 800);
  });
  $('.nav a').on('click', function(){
      $('.navbar-toggle').click()
  });

});
