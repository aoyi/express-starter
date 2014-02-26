alert('I hate midterms!'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
  alert('Hello World!')
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
	$('#houdini_text').hide();
});

$('#reappear').click(function() {
    $('#houdini_text').show();
});

$('#tickle_me_pink').click(function() {
	$('#tickled_text').css('color','pink');
});

$('#greet_me').click(function() {
	alert("Hey, " + $('#my_name').val());
})