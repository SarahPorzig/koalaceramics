$(document).ready(function() {

  $(".myProjectsButton").click(function() {
    $('html, body').animate({
      scrollTop: $("#myProjects").offset().top - 100
    }, 400);
  });
  $(".aboutMeButton").click(function() {
    $('html, body').animate({
      scrollTop: $("#aboutMe").offset().top - 100
    }, 400);
  });
  $('.nav a').on('click', function(){
      $('.navbar-toggle').click()
  });

});
