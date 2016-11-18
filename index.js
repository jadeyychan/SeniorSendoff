function incorrect() {
	$("button").click(function() {
		$(this).css("background-color", "#E02F2F");
		$(this).css("color", "white");
	});
}

function correct() {
	$("button").click(function() {
		$(this).css("background-color", "#0D780F");
		$(this).css("color", "white");
	});
}
