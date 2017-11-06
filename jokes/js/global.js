var getCategory = function(data) {
            for(var i = 0; i < data.length; i++) {
                $("#btn-category").append('<button type="button" class="btn btn-success">' + data[i] + '</button>');
            }
        };

var getJoke = function(data) {
            $(".joke-container").html('<h2 id="joke" class="jumbotron text-center">' + data.value + '</h2>');
        };

var showGif = function() {
            $('#joke').html('<img src="https://m.popkey.co/163fce/Llgbv_s-200x150.gif" alt="https://m.popkey.co/163fce/Llgbv_s-200x150.gif" class="transparent">');
        };

$.ajax({
    method: "GET",
    url: "https://api.chucknorris.io/jokes/categories",
    dataType: "json"
}).done(getCategory).fail(function(data) { 
    console.log(data.responseText); 
});

$(document).on('click', '.btn', function() {
    var category = $(this).text();

    $.ajax({
        method: "GET",
        url: "https://api.chucknorris.io/jokes/random?category=" + category,
        dataType: "json",
        beforeSend: showGif
    }).done(getJoke).fail(function(data) { 
        console.log(data.responseText); 
    });
});