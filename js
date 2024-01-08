
$(document).ready(function () {
    // Task 1
    console.log("Let's get ready to party with jQuery!");
  
    // Task 2
    $("article img").addClass("image-center");
  
    // Task 3
    $("article p:last-child").remove();
  
    // Task 4
    let randomSize = Math.floor(Math.random() * 101);
    $("#title").css("font-size", randomSize + "px");
  
    // Task 5
    $("aside ol").append("<li>New list item!</li>");
  
    // Task 6
    $("aside").empty().append("<p>Sorry for the list's existence.</p>");
  
    // Task 7
    $("input").on("input", function () {
      let red = $("input:nth-child(1)").val();
      let blue = $("input:nth-child(2)").val();
      let green = $("input:nth-child(3)").val();
      $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`);
    });
  
    // Task 8
    $("article img").on("click", function () {
      $(this).remove();
    });
  });
