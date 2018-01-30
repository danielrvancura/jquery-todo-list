$(document).ready(function() {
  
  $("ul").on("click", 'li', function(event) {
  	// this is what we will use for deleting items
 	$(this).remove();
// 	$("#box").live("keypress", function(e) {
//         if (e.keyCode == 13) {
//             alert("Enter pressed");
//             return false; // prevent the button click from happening
//         }
// }); 
  });

  

	$("button").on("click", function() {
		var newItem = document.forms["toDoList"].elements["list"].value;
		
		// console.log(document.forms["toDoList"].elements["list"].value);
		$(".list").append("<li>" + newItem + "</li>");
		$("input").val("");
		
     
	});
});


// $("#box").live("keypress", function(e) {
// // $("box").keyup(function(event) {
// //     if (event.keyCode === 13) {
// //         $("#button").click();
// //     }
// // });