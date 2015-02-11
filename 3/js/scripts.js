// Load (run) modal on page load event

$('.ui.modal')
  .modal();

// Use `show` option/parameter

$('.ui.modal')
  .modal('show');

// Random Number Generator
// returns 0 to 'limit' or 3 numbers
var limit = 3;
var numRand = Math.floor(Math.random()*limit);

// Store 3 separate variables into a single array
var heading0 = 'Everything is Awesome!';
var heading1 = 'Be the Good.';
var heading2 = 'Dont Panic & Carry On.';



// Randomly select one-of-3 Headings on Page Load

$('.ui.modal>.header').text( eval('heading' + numRand) );


// Output to Heading
// REF: http://api.jquery.com/text/
