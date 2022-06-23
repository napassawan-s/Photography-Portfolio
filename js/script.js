var theme = "Light";
let cart = 0;

function getTheme(){
  if (!localStorage.getItem("theme")) {
    return "Light";
  }
  return localStorage.getItem("theme");
}

function getCart(){
  if (!localStorage.getItem("cart")) {
    return Number(0);
  }
  return Number(localStorage.getItem("cart"));
}

function currentTheme(){
  if(getTheme() == "Light"){
    $("#Light").hide();
    $("#Dark").show();
    Light();
  }else {
    $("#Light").show();
    $("#Dark").hide();
    Dark();
  }
}

$(document).ready(function() {

  var title = document.querySelectorAll("h1.titletext")[0].textContent;

  //resize handling
  $(window).on("resize", resize);
  resize();

  //get current theme in localStorage
  currentTheme();

  //get current amount of item in cart in localStorage and only shows if the cart is not empty
  if(getCart() === 0){
    $(".numCart").hide();
  }else{
    $(".numCart").show();
    $(".numCart").text(getCart());
  }

  //click to change theme
  $("#Dark").click(Dark);
  $("#Light").click(Light);

  //open hamburger menu
  $(".hamburger").click(function(){
    if(document.querySelector('div.nav-links').style.display == "block"){
      $("div.nav-links").fadeOut(300,function(){
        $("div.nav-links").css("display","none");
      })
    }else{
      $("div.nav-links").fadeIn(300,function(){
        $("div.nav-links").css("display","block");
      })
    }
  });



});
