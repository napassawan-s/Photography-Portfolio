
function homeShrink(){
  $("#h1Home").css("line-height","110%")
  $("#h1Home").css("margin-top","-70px")
  $("img.landscapes").hide();
  $("img.portraits").hide();
  //image and title
  $("#homeLandscapes").addClass('landscapesShrink');
  $("#homeLandscapes").removeClass('landscapes');
  $("#homePortraits").addClass('portraitsShrink');
  $("#homePortraits").removeClass('portraits');

  $("#landscapestext").addClass('shoptext');
  $("#landscapestext").children().css("color","white");
  $("#landscapestext").removeClass('landscapestext');

  $("#portraitstext").addClass('shoptext');
  $("#portraitstext").children().css("color","white");
  $("#portraitstext").removeClass('portraitstext');
  //landscape and portrait button
  $("button#landscapesButton").addClass('shop');
  $("#landscapesButton").css("border","1.5px solid white");
  $("button#portraitsButton").addClass('shop');
  $("#portraitsButton").css("border","1.5px solid white");
  //about me section
  $(".abouttext").css("display","block")
  $(".aboutus").css("position","static")
  $("div.aboutme").css("padding-left","0px")
  $(".abouttext").css("width","100%")
  $("div.aboutme").css("text-align","center")
  $("div.aboutme").css("margin-top","-100px")
  $("div.aboutme").css("margin-bottom","450px")
  $("img.aboutus").css("width","270px")
  $("img.aboutus").css("height","270px")
  $("img.aboutus").css("margin-top","40px")
  //shop
  $(".shopcontainer").css("margin-top","100px");
}

function homeExpand() {
  $("#h1Home").css("line-height","100%")
  $("#h1Home").css("margin-top","-25px")
  $("#HomeTitle").css("padding-top","263px")
  $("img.landscapes").show();
  $("img.portraits").show();
  //image and title
  $("#homeLandscapes").removeClass('landscapesShrink');
  $("#homeLandscapes").addClass('landscapes');
  $("#homePortraits").removeClass('portraitsShrink');
  $("#homePortraits").addClass('portraits');

  $("#landscapestext").removeClass('shoptext');
  $("#landscapestext").children().css("color","#333333");
  $("#landscapestext").addClass('landscapestext');

  $("#portraitstext").removeClass('shoptext');
  $("#portraitstext").addClass('portraitstext');
  $("#portraitstext").children().css("color","#333333");
  //button
  $("button#landscapesButton").removeClass('shop');
  $("button#portraitsButton").removeClass('shop');
  $("#landscapesButton").css("border","1.5px solid black");
  $("#portraitsButton").css("border","1.5px solid black");
  //about me section
  $(".abouttext").css("display","inline-block")
  $(".aboutus").css("position","absolute")
  $("div.aboutme").css("padding-left","119px")
  $("p.abouttext").css("width","30%")
  $("a.abouttext").css("width","auto")
  $("div.aboutme").css("text-align","left")
  $("div.aboutme").css("margin-top","0px")
  $("div.aboutme").css("margin-bottom","0px")
  $("img.aboutus").css("width","400px")
  $("img.aboutus").css("height","400px")
  $("img.aboutus").css("margin-top","0px")
  //shop
  $(".shopcontainer").css("margin-top","300px");
}

function contactShrink(){
  $("#rightbody").addClass('rightbodytextShrink');
  $("#rightbody").removeClass('rightbodytext');
  $("#leftbody").addClass('leftbodytextShrink');
  $("#leftbody").removeClass('leftbodytext');
  $("#contact").css("height","1400px")
}

function contactExpand(){
  $("#rightbody").removeClass('rightbodytextShrink');
  $("#rightbody").addClass('rightbodytext');
  $("#leftbody").removeClass('leftbodytextShrink');
  $("#leftbody").addClass('leftbodytext');
  $("#contact").css("height","750px")
}

function galleryShrink() {
  $(".imageContainer").css("width","100%");
  $(".imageContainer").css("display","block");
}

function galleryExpand() {
  $(".imageContainer").css("display","inline-block");
  $(".imageContainer").css("width","31.25%");
}

function aboutShrink() {
  $("h2").css("line-height","110%")
}

function aboutExpand() {
  $("h2").css("line-height","100%")
}

function shopShrink() {
  $(".itemsContainer").css("display","block");
  $(".itemsContainer").css("width","95%");
  $(".description").css("margin-left","auto")
  $(".description").css("margin-right","auto")
  $(".itemstitle").css("margin-left","auto")
  $(".itemstitle").css("margin-right","auto")
}

function shopExpand() {
  $(".itemsContainer").css("display","inline-block");
  $(".itemsContainer").css("width","30%");
  $(".description").css("margin-left","0")
  $(".description").css("margin-right","0")
  $(".itemstitle").css("margin-left","0")
  $(".itemstitle").css("margin-right","0")
}

function navShrink(width){
  $(".nav-links").css("width", width);
  $("div.nav-links").css("display","none");
  $("div.nav-links").css("margin-top","20px");
  $(".hamburger").css("display","block");
  $("a.navbar").css("display","block");
  $("a.navbar").css("text-align","right");
}

function navExpand(width) {
  $(".nav-links").css("width", width*0.8);
  $("div.nav-links").css("margin-top","0px");
  $(".hamburger").css("display","none");
  $("div.nav-links").css("display","block");
  $("a.navbar").css("display","inline-block");
  $("a.navbar").css("text-align","center");
}

function resize() {
  var title = document.querySelectorAll("h1.titletext")[0].textContent;
  var screenWidth = $(window).width();

  if ( $(window).width() < 950) {
    currentTheme();

    switch (title) {
      case "Napa Photography":
        homeShrink();
        break;
      case "About me":
        aboutShrink();
        break;
      case "Contact me":
        contactShrink();
        break;
      case "Landscape":
        galleryShrink(screenWidth);
        break;
      case "Portrait":
        galleryShrink(screenWidth);
        break;
      case "Shop":
        shopShrink();
        break;
    }

    navShrink(screenWidth);
    $("div[class^='footer']").css("padding-left","40px")
  }

  else {
    currentTheme();

    switch (title) {
      case "Napa Photography":
        homeExpand();
        break;
      case "About me":
        aboutExpand();
        break;
      case "Contact me":
        contactExpand();
        break;
      case "Landscape":
        galleryExpand(screenWidth);
        break;
      case "Portrait":
        galleryExpand(screenWidth);
        break;
      case "Shop":
        shopExpand();
        break;
    }

    navExpand(screenWidth);
    $("div[class^='footer']").css("padding-left","119px")
  }
}
