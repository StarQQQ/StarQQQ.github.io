var flip = 0;
$( "button" ).click(function() {
  $( "p" ).toggle( flip++ % 2 === 0 );
});