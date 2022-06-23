
function Light(){
  //set current theme in localStorage
  localStorage.setItem("theme", "Light");
  $("#Light").hide();
  $("#Dark").show();

  $("body").css("background-color", "white");
  $(".header").css("background-color", "white");
  $(".nav-links").children().css("color", "#333333");
  $(".nav-links").css("background-color", "white");
  $("div.image").children().css("color", "#333333");
  $("div.aboutme").children().css("color", "#333333");

  if($(window).width() > 950){
    $("#landscapestext").children().css("color", "#333333");
    $("#portraitstext").children().css("color", "#333333");
  }

  $("div.body").children().css("color", "#333333");
  $("hr.contact").css("border-color", "#333333");
  $("button").css("border-width", "1.5px");
  $("img.icon").attr("src","pics/shopping-cart.png");
  $("img.hamburger").attr("src","pics/hamburger.png");
  $("#overlay").css("background-color", "rgba(0,0,0,0.5)");

  if(document.querySelectorAll("h1.titletext")[0].textContent != "Napa Photography"){
      $(".titletext").css("color", "#333333");
    }
  }

  function Dark(){

    //set current theme in localStorage
    localStorage.setItem("theme", "Dark");
    $("#Light").show();
    $("#Dark").hide();

    $("body").css("background-color", "#333333");
    $(".header").css("background-color", "#333333");
    $(".nav-links").children().css("color", "white");
    $(".nav-links").css("background-color", "#333333");

    $("div.image").children().css("color", "white");
    $("div.aboutme").children().css("color", "white");
    if($(window).width() > 950){
      $("#landscapestext").children().css("color", "white");
      $("#portraitstext").children().css("color", "white");
    }

    $("div.body").children().css("color", "white");
    $("hr.contact").css("border-color", "white");
    $("button").css("border-width", "0px")
    $("button.shop").css("border-width", "1.5px")
    $(".titletext").css("color", "white");
    $("img.icon").attr("src","pics/shopping-cart-darkMode.png");
    $("img.hamburger").attr("src","pics/hamburger_Darkmode.png");
    $("#overlay").css("background-color", "rgba(255,255,255,0.5)");
  }
