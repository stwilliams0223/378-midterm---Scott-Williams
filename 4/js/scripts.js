// Change Day and Night reading modes


// Upon Clicking "Nightime"
// REF: http://api.jquery.com/click/


$( ".item.night" ).click(function() {

	// remove `day` class
// REF: http://api.jquery.com/removeclass/
  
$( "body" ).removeClass( "day" )

// Add `night` class
// REF: http://api.jquery.com/addclass/

$( "body" ).addClass( "night" );

});




// Upon Clicking "Daytime"
// REF: http://api.jquery.com/click/


$( ".item.day" ).click(function() {

// remove `night` class
// REF: http://api.jquery.com/removeclass/
  
$( "body" ).removeClass( "night" )

// Add `day` class
// REF: http://api.jquery.com/addclass/

$( "body" ).addClass( "day" );

});









