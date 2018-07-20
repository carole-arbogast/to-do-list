// // Add todo: take input value and create an item - use keypress enter
//
//

  $("input").keypress(function(e){
    if (e.which == 13) {
      var newInput = $("input").val();
      $("ul").append("<li> <span><i class='fa fa-trash' aria-hidden='true'></i></span>" + newInput + "</li>");
      $("input").val("");
    }
  })

// Check todo

$("ul").on("click", "li", function(event){
  $(this).toggleClass("done");
})

// delete event -> click event on bin icon = delete item div

$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut("slow", function(){
  });
  event.stopPropagation(); 
})

// // click event "+" icon -> hide "add" div

$("h1").on("click", ".fa-plus", function(event) {
  $("input").toggleClass("hidden");
})
