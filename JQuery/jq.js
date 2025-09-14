// $('p').css("color","red") //Selecting p and turns red

// $("#btn").click(function() {
//   $("#message").text("You clicked the button!");
// });

$("#btn").click(function() {
  $("#para1").slideUp();
});

$("#btnI").click(function() {
  $("#img1").fadeOut(2000, function() {
    alert("Image is hidden now!");
  });
});

$("#add").click(function () { 
    $("#myList").append("<li>Orange</li>");
 })

$("#btnT").click(function () { 
    $("#msg").toggleClass("redText")
 })

$("#box").find("p").fadeOut()


