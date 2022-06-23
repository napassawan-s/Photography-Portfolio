$(document).ready(function(){
  //alert before submit
  $(".submit").click(function(){
    var name = $("#name").val();
    var email = $("#email").val();
    var details = $("#details").val();

    if(name != "" && email != "" && details != ""){
      window.alert("Are you sure you want to submit?");
    }else{
      window.alert("* area must be filled");
    }
  })
})
