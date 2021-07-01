$(document).ready(function() {

function myFunction(x) {
  if (x.matches) { // If media query = less than 767px wide
    
   $(".aboutUsButton").click(function() {
    $('html, body').animate({
      scrollTop: $("#aboutUs").offset().top - 0
    }, 1);
  });
  $(".yogaClassesButton").click(function() {
    $('html, body').animate({
      scrollTop: $("#yogaClasses").offset().top - 0
    }, 1);
  });
  $(".timetableButton").click(function() {
    $('html, body').animate({
      scrollTop: $("#timetable").offset().top - 0
    }, 1);
  });
  $(".pricesButton").click(function() {
    $('html, body').animate({
      scrollTop: $("#prices").offset().top - 0
    }, 1);
  });
  $(".contactButton").click(function() {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top - 0
    }, 1);
  });
  $(".testimonialsButton").click(function() {
    $('html, body').animate({
      scrollTop: $("#testimonials").offset().top - 0
    }, 1);
  });
  $('.nav a').on('click', function(){
      $('.navbar-toggle').click()
  });



  } else { // if media query = more than 767px wide
    
 $(".aboutUsButton").click(function() {
    $('html, body').animate({
      scrollTop: $("#aboutUs").offset().top - 0
    }, 400);
  });
  $(".yogaClassesButton").click(function() {
    $('html, body').animate({
      scrollTop: $("#yogaClasses").offset().top - 0
    }, 400);
  });
  $(".timetableButton").click(function() {
    $('html, body').animate({
      scrollTop: $("#timetable").offset().top - 0
    }, 400);
  });
  $(".pricesButton").click(function() {
    $('html, body').animate({
      scrollTop: $("#prices").offset().top - 0
    }, 400);
  });
  $(".contactButton").click(function() {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top - 0
    }, 400);
  });
  $(".testimonialsButton").click(function() {
    $('html, body').animate({
      scrollTop: $("#testimonials").offset().top - 0
    }, 400);
  });
  $('.nav a').on('click', function(){
      $('.navbar-toggle').click()
  });


  }
}

var x = window.matchMedia("(max-width: 767px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



});
