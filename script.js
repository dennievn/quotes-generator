

$(document).ready(function(){
    const randQuote = "";
    const author = "";

    function getQuote(){
        const url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
        $.getJSON(url, function(data){
            $(".quotes").html(data.quoteText);
            $(".author").html("-"+ data.quoteAuthor);
    });

    };
$('.tweet').on("click", function(){
    window.open("https://twitter.com/intent/tweet?text=" + quotes);
    });
    $(".newQuote").on("click", function(){
        getQuote();
    });
});


