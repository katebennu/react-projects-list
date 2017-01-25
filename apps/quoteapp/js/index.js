$(document).ready(function() {
  $("#getQuote").mouseenter(function() {
    $(this).css("background-color", "rgb(171, 160, 186)");
  });
  $("#getQuote").mouseleave(function() {
    $(this).css("background-color", "rgb(143, 145, 168)");
  });
  
  
  $("#getQuote").on("click", function() {
    $(".quotebox").html('');
                   $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json) {
      var text = "<blockquote>"+json.quote+"</blockquote>"+"<footer>"+json.author+"</footer>";
      $(".quotebox").html(text);
      var twlink = "https://twitter.com/intent/tweet?text='"+json.quote+"' ("+json.author+")";
      $("#tw").attr("href", twlink);
    });
  });
});
