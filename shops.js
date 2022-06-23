function showOverlay() {
  navigator.geolocation.getCurrentPosition(function(position){

    //university of leeds < 2
    const destinationLatitude = 53.806868376958775;
    const destinationLongitude= -1.5550220728943849;

    //manchester victoria > 2
    const destinationLatitude_test = 53.488090220910294;
    const destinationLongitude_test=  -2.242236606849517;

    console.log("user position: "+position.coords.latitude+", "+position.coords.longitude);

    /*the code from line 14 to 26 is referenced from http://www.movable-type.co.uk/scripts/latlong.html
    to calculate the distance between two Latitude and Longitude coordinates using haversine’s formula*/

    const r = 6371e3;
    const lat1 = position.coords.latitude * Math.PI/180; // to radians
    const lat2 = destinationLatitude * Math.PI/180;

    const diffLat = (destinationLatitude-position.coords.latitude) * Math.PI/180;
    const diffLong = (destinationLongitude-position.coords.longitude) * Math.PI/180;

    const a = Math.pow(Math.sin(diffLat/2),2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(diffLong/2),2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = (r * c)/1000; //convert m to km

    console.log("distance: "+d);

    if(d<=2){
      $('#overlay').fadeIn("slow", function(){
        $(this).css("display","block");
        console.log("display overlay");
      })
    }
  });
}

function setCart(amount) {
  var n = getCart() + parseInt(amount);
  $(".numCart").show();
  localStorage.setItem("cart", n);
  $(".numCart").text(""+getCart());
}

$(document).ready(function() {
  showOverlay();

  $('#overlay').click(function(){
    $(this).fadeOut(function() {
      $(this).css("display", "none")
      console.log("close overlay");
    });
  });

  //add items in cart with quantity selected
  var amountCard = 1;
  var amountBook = 1;
  var amountCalendar = 1;

  $("#itemSelectionCard").change(function(){
    amountCard = $(this).children("option:selected").val();
    });

  $("#itemSelectionBook").change(function(){
    amountBook = $(this).children("option:selected").val();
  });

  $("#itemSelectionCalendar").change(function(){
    amountCalendar = $(this).children("option:selected").val();
  });

  $("#cardAdd").click(function(){
    //console.log(amountCard);
    setCart(amountCard);
  })

  $("#bookAdd").click(function(){
    //console.log(amountBook);
    setCart(amountBook);
  })

  $("#calendarAdd").click(function(){
    //console.log(amountCalendar);
    setCart(amountCalendar);
  })

  //change preview photo when hover
  $(".imagePreview").hover(function(){

    var id = $(this).attr('id');
    $(this).attr("src","pics/"+id+"previewHover.jpeg");

  }, function(){
    var id = $(this).attr('id');
    $(this).attr("src","pics/"+id+"preview.jpeg");
  });

  //append quantity selection
  $('[id^=itemSelection]').click(function() {
    if($(this).children().length <= 1){
      for(var i = 2; i<31; i++){
        $(this).append("<option value=\""+i+"\">"+i+"</option>");
      }
    }
  });

});
