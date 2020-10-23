//check off the specific todo 
$("ul").on("click", "li", function(){
	//$(this).css("color", "grey");
	//$(this).css("text-decoration", "line-through");
	//or we can make an object
	//$(this).css({
	//	color:"grey",
	//	textDecoration: "line-through"
	//});
	$(this).toggleClass("completed");
});

//click on x to delete the todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if (e.which===13) {
		//grabbing new todo from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + " </li>");
		


	}
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})