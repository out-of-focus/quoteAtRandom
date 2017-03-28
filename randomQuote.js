var tweet = "";

var newQuote = function() {
  $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?', function(data) {
    $("#quote1").html(data.quoteText);
    if (data.quoteAuthor !== "") {
      $("#author").html("- " + data.quoteAuthor)
    } else {
      $("#author").html("- Anonymous")
    };
    tweet = "https://twitter.com/intent/tweet?text="+data.quoteText+" "+data.quoteAuthor+" %23quotebot";
    $("p").animate({
      opacity: '1'
    }, 500);
  })
};

$(document).ready(function(){
	newQuote();
	$("#btnDiv").click(function() {
  $("p").animate({
    opacity: '0'
  }, 500, newQuote);
});
$("#tweeter").click(function() {
 window.open(tweet)
  });
})



  
