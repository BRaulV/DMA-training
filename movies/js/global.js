var regions = ['all',
    'af', 'ax', 'al', 'dz', 'as', 'ad', 'ao', 'ai', 'aq', 'ag', 'ar', 'am', 'aw',
    'au', 'at', 'az', 'bs', 'bh', 'bd', 'bb', 'by', 'be', 'bz', 'bj', 'bm', 'bt',
    'bo', 'ba', 'bw', 'bv', 'br', 'io', 'bn', 'bg', 'bf', 'bi', 'kh', 'cm', 'ca',
    'cv', 'ky', 'cf', 'td', 'cl', 'cn', 'cx', 'cc', 'co', 'km', 'cg', 'cd', 'ck',
    'cr', 'ci', 'hr', 'cu', 'cy', 'cz', 'dk', 'dj', 'dm', 'do', 'ec', 'eg', 'sv',
    'gq', 'er', 'ee', 'et', 'fk', 'fo', 'fj', 'fi', 'fr', 'gf', 'pf', 'tf', 'ga',
    'gm', 'ge', 'de', 'gh', 'gi', 'gr', 'gl', 'gd', 'gp', 'gu', 'gt', 'gg', 'gn',
    'gw', 'gy', 'ht', 'hm', 'va', 'hn', 'hk', 'hu', 'is', 'in', 'id', 'ir', 'iq',
    'ie', 'im', 'il', 'it', 'jm', 'jp', 'je', 'jo', 'kz', 'ke', 'ki', 'kr', 'kw',
    'kg', 'la', 'lv', 'lb', 'ls', 'lr', 'ly', 'li', 'lt', 'lu', 'mo', 'mk', 'mg',
    'mw', 'my', 'mv', 'ml', 'mt', 'mh', 'mq', 'mr', 'mu', 'yt', 'mx', 'fm', 'md',
    'mc', 'mn', 'me', 'ms', 'ma', 'mz', 'mm', 'na', 'nr', 'np', 'nl', 'an', 'nc',
    'nz', 'ni', 'ne', 'ng', 'nu', 'nf', 'mp', 'no', 'om', 'pk', 'pw', 'ps', 'pa',
    'pg', 'py', 'pe', 'ph', 'pn', 'pl', 'pt', 'pr', 'qa', 're', 'ro', 'ru', 'rw',
    'bl', 'sh', 'kn', 'lc', 'mf', 'pm', 'vc', 'ws', 'sm', 'st', 'sa', 'sn', 'rs',
    'sc', 'sl', 'sg', 'sk', 'si', 'sb', 'so', 'za', 'gs', 'es', 'lk', 'sd', 'sr',
    'sj', 'sz', 'se', 'ch', 'sy', 'tw', 'tj', 'tz', 'th', 'tl', 'tg', 'tk', 'to',
    'tt', 'tn', 'tr', 'tm', 'tc', 'tv', 'ug', 'ua', 'ae', 'gb', 'us', 'um', 'uy',
    'uz', 'vu', 've', 'vn', 'vg', 'vi', 'wf', 'eh', 'ye', 'zm', 'zw'
];

var languages = ['all',
    'ab', 'aa', 'af', 'ak', 'sq', 'am', 'ar', 'an', 'hy', 'as', 'av', 'ae', 'ay',
    'az', 'bm', 'ba', 'eu', 'be', 'bn', 'bh', 'bi', 'bs', 'br', 'bg', 'my', 'ca',
    'km', 'ch', 'ce', 'ny', 'zh', 'cu', 'cv', 'kw', 'co', 'cr', 'hr', 'cs', 'da',
    'dv', 'nl', 'dz', 'en', 'eo', 'et', 'ee', 'fo', 'fj', 'fi', 'fr', 'ff', 'gd',
    'gl', 'lg', 'ka', 'de', 'ki', 'el', 'kl', 'gn', 'gu', 'ht', 'ha', 'he', 'hz',
    'hi', 'ho', 'hu', 'is', 'io', 'ig', 'id', 'ia', 'ie', 'iu', 'ik', 'ga', 'it',
    'ja', 'jv', 'kn', 'kr', 'ks', 'kk', 'rw', 'kv', 'kg', 'ko', 'kj', 'ku', 'ky',
    'lo', 'la', 'lv', 'lb', 'li', 'ln', 'lt', 'lu', 'mk', 'mg', 'ms', 'ml', 'mt',
    'gv', 'mi', 'mr', 'mh', 'ro', 'mn', 'na', 'nv', 'nd', 'ng', 'ne', 'se', 'no',
    'nb', 'nn', 'ii', 'oc', 'oj', 'or', 'om', 'os', 'pi', 'pa', 'ps', 'fa', 'pl',
    'pt', 'qu', 'rm', 'rn', 'ru', 'sm', 'sg', 'sa', 'sc', 'sr', 'sn', 'sd', 'si',
    'sk', 'sl', 'so', 'st', 'nr', 'es', 'su', 'sw', 'ss', 'sv', 'tl', 'ty', 'tg',
    'ta', 'tt', 'te', 'th', 'bo', 'ti', 'to', 'ts', 'tn', 'tr', 'tk', 'tw', 'ug',
    'uk', 'ur', 'uz', 've', 'vi', 'vo', 'wa', 'cy', 'fy', 'wo', 'xh', 'yi', 'yo',
    'za', 'zu'
];

var sortBys = ['default',
    "popularity.asc",
    "popularity.desc",
    "release_date.asc",
    "release_date.desc",
    "revenue.asc",
    "revenue.desc",
    "primary_release_date.asc",
    "primary_release_date.desc",
    "original_title.asc",
    "original_title.desc",
    "vote_average.asc",
    "vote_average.desc",
    "vote_count.asc",
    "vote_count.desc"
];

var genresUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=8dcade7c14ccdb0898a716a31f303e74&language=en-US";
var discoverUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=8dcade7c14ccdb0898a716a31f303e74';
var searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=8dcade7c14ccdb0898a716a31f303e74';
var discoverFinalUrl = '';
var searchFinalUrl = '';
var currentPage = '';
var maxPage = '';
var genres = '';

var showGif = function() {
    $('#joke').html('<img src="https://m.popkey.co/163fce/Llgbv_s-200x150.gif" alt="https://m.popkey.co/163fce/Llgbv_s-200x150.gif" class="transparent">');
};

var showGenres = function(data) {
    genres = data.genres;

    for(var i = 0; i < genres.length; i++) {
        $('.genres').append('<option value="' + genres[i].id + '">' + genres[i].name + '</option>');
    }
};

$('.datetimepicker1').datetimepicker({
    format: 'YYYY-MM-DD'
});
$('.datetimepicker2').datetimepicker({
    format: 'YYYY'
});

$.ajaxSetup({ 
     beforeSend:function() { 
         showGif();
     },
     complete:function() {
           $('#joke').empty();
     }
});

$(document).ready(function() {
    $.ajax({
        method: "GET",
        url: genresUrl,
        dataType: "json"
    }).done(showGenres).fail(function(data) { 
        console.log(data.responseText);
    });
});

function checkArrayContains (value, array) {
    if(array.indexOf(value.toLowerCase()) === -1) {
        return false;
    } else {
        return true;
    }
}

function validateNumber (value) {
    if(value.match(/^[0-9]+$/) === null) {
        return false;
    } else {
        return true;
    }
}

function validateDate (value) {
    if(!moment(value, 'YYYY-MM-DD',true).isValid()) {
        return false;
    } else {
        return true;
    }
}

function validateYear (value) {
    if(!moment(value, 'YYYY',true).isValid()) {
        return false;
    } else {
        return true;
    }
}

function validateGenre (value) {
    for(var i = 0; i < genres.length; i++){
       if(genres[i].id == value) {
           return true;
       }
    }
    return false;
}

function makeUrl(inputCase, elem, url){
    switch(inputCase) {
        case "region":
            var region = elem.val();

            if (region.length !== 0 && region !== "all") {
                if(checkArrayContains(region, regions)) {
                    return url + '&region=' + region.toUpperCase();
                } else {
                    $(elem).parent().css('background-color', 'rgb(255, 234, 234)');
                    alert('Please stop!');
                    return false;
                }
            }
            return url;
            break;

        case "language":
            var language = elem.val();

            if (language.length !== 0 && language !== "all") {
                if(checkArrayContains(language, languages)) {
                    return url + '&language=' + language.toLowerCase();
                } else {
                    $(elem).parent().css('background-color', 'rgb(255, 234, 234)');
                    alert('Please stop!');
                    return false;
                }
            }
            return url;
            break;

        case "voteCountGte":
            var voteGte = elem.val();

            if (voteGte.length !== 0) {
                if(validateNumber(voteGte)) {
                    return url + '&vote_count.gte=' + voteGte;
                } else {
                    $(elem).css('background-color', 'rgb(255, 234, 234)');
                    alert('Please insert a number greater then 0 !');
                    return false;
                }
            }
            return url;
            break;

        case "voteCountLte":
            var voteLte = elem.val();

            if (voteLte.length !== 0) {
                if(validateNumber(voteLte)) {
                    return url + '&vote_count.lte=' + voteLte;
                } else {
                    $(elem).css('background-color', 'rgb(255, 234, 234)');
                    alert('Please insert a number greater then 0 !');
                    return false;
                }
            }
            return url;
            break;

        case "releaseDateGte":
            var releaseDateGte = elem.val();

            if (releaseDateGte.length !== 0) {
                if(validateDate(releaseDateGte)) {
                    return url + '&release_date.gte=' + releaseDateGte;
                } else {
                    $(elem).css('background-color', 'rgb(255, 234, 234)');
                    alert('Please insert a valid date, like ("1992-05-12")');
                    return false;
                }
            }
            return url;
            break;

        case "releaseDateLte":
            var releaseDateLte = elem.val();

            if (releaseDateLte.length !== 0) {
                if(validateDate(releaseDateLte)) {
                    return url + '&release_date.lte=' + releaseDateLte;
                } else {
                    $(elem).css('background-color', 'rgb(255, 234, 234)');
                    alert('Please insert a valid date, like ("1992-05-12")');
                    return false;
                }
            }
            return url;
            break;

        case "sortBy":
            var sortBy = elem.val();

            if(sortBy.length !== 0 && sortBy !== "default") {
                if(checkArrayContains(sortBy, sortBys)) {
                    return url + '&sort_by=' + sortBy.toLowerCase();
                } else {
                    $(elem).parent().css('background-color', 'rgb(255, 234, 234)');
                    alert('Please stop!');
                    return false;
                }
            }
            return url;
            break;

        case "genre":
            var genre = elem.val();

            if(genre.length !== 0 && genre !== "all") {
                if(validateGenre(genre)) {
                    return url + '&with_genres=' + genre;
                } else {
                    $(elem).parent().css('background-color', 'rgb(255, 234, 234)');
                    alert('Please stop!');
                    return false;
                }
            }
            return url;
            break;

        case "notGenre":
            var notGenre = elem.val();

            if(notGenre.length !== 0 && notGenre !== "all") {
                if(validateGenre(notGenre)) {
                    return url + '&without_genres=' + notGenre.str;
                } else {
                    $(elem).parent().css('background-color', 'rgb(255, 234, 234)');
                    alert('Please stop!');
                    return false;
                }
            }
            return url;
            break;

        case "year":
            var year = elem.val();

            if(year.length !== 0) {
                if(validateYear(year)) {
                    return url + '&year=' + year;
                } else {
                    $(elem).css('background-color', 'rgb(255, 234, 234)');
                    alert('Please insert a valid year, like ("1995")');
                    return false;
                }
            }
            return url;
            break;

        case "name":
            var name_search = elem.val();

            if(name_search.length !== 0) {
                return url + '&query=' + name_search;
            }
            $(elem).css('background-color', 'rgb(255, 234, 234)');
            alert("Campul 'Name' trebuie sa fie completat !!! ");

            return false;
            break;
    };
}

function scrollWin() {
    $('body,html').animate({ scrollTop: $('.image-header').height() }, 500);
}

var showMovies = function(data) {
    if(data.total_results > 0) {
        $('.results').empty();
        $('#pages').html('<b>Pages:</b> ' + data.total_pages);
        $('#results').html('<b>Resuls:</b> ' + data.total_results);

        var html = '';
        var pageNumbers = '';
        var pagination = '';
        var prevStatus = '';
        var nextStatus = '';

        currentPage = parseInt(data.page);
        maxPage = parseInt(data.total_pages);

        Object.keys(data.results).forEach(function(key) {
            var genreMovie = '';

            for(var i = 0; i < data.results[key].genre_ids.length; i++) {
                for(var j = 0; j < genres.length; j++){
                    if(data.results[key].genre_ids[i] === genres[j].id) {
                        genreMovie += genres[j].name + ', ';
                        break;
                    }
                }
            }

            if(data.results[key].poster_path !== null) {
                var image = '<img src="http://image.tmdb.org/t/p/w185' + data.results[key].poster_path + '" width="170" height="200">';
            } else {
                var image = '<img src="http://via.placeholder.com/170x200" width="170" height="200">';
            }

            html = '<div class="search-class" id="' + data.results[key].id + '" data-toggle="modal" data-target="#myModal' + key + '">' +
                        '<div class="col-xs-12 col-sm-4 col-md-4 img-container">' +
                            '<h4>' + data.results[key].title + '</h4>' +
                            image +
                        '</div>' +
                    '</div>'+
                    '<div class="modal fade" id="myModal' + key + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
                        '<div class="modal-dialog" role="document">' +
                            '<div class="modal-content">' +
                                '<div class="modal-header">' +
                                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                                    '<h4 class="modal-title" id="myModalLabel">' + data.results[key].title + '</h4>' +
                                '</div>' +
                                '<div class="modal-body">' +
                                    '<div class="detail">' +
                                         image +
                                        '<span class="article">' +
                                           '<ul>' +
                                               '<li><h3><span class="glyphicon glyphicon-star" aria-hidden="true"></span> Movie note: ' + data.results[key].vote_average + '</h3></li>' +
                                               '<li><h3><span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> Votes: ' + data.results[key].vote_count + '</h3></li>' +
                                               '<li><h3><span class="glyphicon glyphicon-heart" aria-hidden="true"></span> Popularity: ' + data.results[key].popularity + '</h3></li>' +
                                           '</ul>' +
                                        '</span>' +
                                    '</div>' +
                                    '<div class="description">' +
                                        '<h3>Movie genre</h3>' +
                                        genreMovie.replace(/(^,\s)|(,\s$)/g, "") +
                                        '<h3>Overview</h3>' +
                                       '<p>' + data.results[key].overview + '</p>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="modal-footer">' +
                                    '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
            $('.results').append(html);
        });

        if(currentPage === 1) {
            prevStatus = 'disabled';
        }
        if(currentPage === maxPage) {
            nextStatus = 'disabled';
        }

        if(maxPage > 1) {
            if(maxPage > 7) {
                for (var i = currentPage; i <= currentPage + 5 ; i++) {
                    if(i === currentPage) {
                        pageNumbers += '<button type="button" id="' + i + '" class="btn btn-primary paginate">' + i + '</button>';
                    } else {
                        pageNumbers += '<button type="button" id="' + i + '" class="btn btn-default paginate">' + i + '</button>';
                    }
                }
                pageNumbers += '<button type="button" id="" class="btn btn-default paginate">...</button>' +
                               '<button type="button" id="' + maxPage + '" class="btn btn-default paginate">' + maxPage + '</button>';
            } else {
                for (var i = 1; i <= maxPage ; i++) {
                    if(i === currentPage) {
                        pageNumbers += '<button type="button" id="' + i + '" class="btn btn-primary paginate">' + i + '</button>';
                    } else {
                        pageNumbers += '<button type="button" id="' + i + '" class="btn btn-default paginate">' + i + '</button>';
                    }
                }
            }

            pagination = '<div class="btn-group" role="group">' +
                            '<button type="button" id="prev" class="btn btn-default paginate" ' + prevStatus + '>Prev</button>' +
                              pageNumbers +
                            '<button type="button" id="next" class="btn btn-default paginate"' + nextStatus + '>Next</button>' +
                        '</div>';


            $('.pagination').html(pagination);
        }
        scrollWin();
    } else {
        $('.results').append('<h2>Nu a fost gasit nici un rezultat!</h2>');
    }
};

function ajaxCall(url) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $.ajax({
        method: "GET",
        url: url  + '&page=' + currentPage,
        dataType: "json",
//        beforeSend: showGif
    }).done(showMovies).fail(function(data) { 
        console.log(data.responseText);
    });
}

// search movie
$(document).on('click', '#search', function () {
    $('.results').empty();
    $('.pagination').empty();
    currentPage = 1;

    clearInput($('#input-discover'));

    var search_url = '';
    var name_search = $(this).closest('.search-inputs').find('#name-search');
    var year_search = $(this).closest('.search-inputs').find('#year-search');

    if(makeUrl('name', name_search, search_url) !== false) {
        search_url = makeUrl('name', name_search, search_url);
    } else {
        return false;
    }

    if(makeUrl('year', year_search, search_url) !== false) {
        search_url = makeUrl('year', year_search, search_url);
    } else {
        return false;
    }

    searchFinalUrl = searchUrl + search_url;
    discoverFinalUrl = '';
    $('#link').html('<b>Link:</b> ' + searchFinalUrl.replace('&region', '&amp;region'));

    ajaxCall(searchFinalUrl);
});

// discover movie
$(document).on('click', '#go', function() {
    $('.results').empty();
    $('.pagination').empty();
    currentPage = 1;

    clearInput($('#input-search'));

    var discover_url = '';
    var region = $(this).closest('.search-inputs').find('#region').find(':selected');
    var language = $(this).closest('.search-inputs').find('#language').find(':selected');
    var vote_count_gte = $(this).closest('.search-inputs').find('#vote-count-gte');
    var vote_count_lte = $(this).closest('.search-inputs').find('#vote-count-lte');
    var release_date_gte = $(this).closest('.search-inputs').find('#release-date-gte');
    var release_date_lte = $(this).closest('.search-inputs').find('#release-date-lte');
    var sort_by = $(this).closest('.search-inputs').find('#sort').find(':selected');
    var genre = $(this).closest('.search-inputs').find('#genre').find(':selected');
    var notGenre = $(this).closest('.search-inputs').find('#not-genre').find(':selected');
    var year = $(this).closest('.search-inputs').find('#year');

    if(makeUrl('region', region, discover_url) !== false) {
        discover_url = makeUrl('region', region, discover_url);
    } else {
        return false;
    }
    if(makeUrl('language', language, discover_url) !== false) {
        discover_url = makeUrl('language', language, discover_url);
    } else {
        return false;
    }
    if(makeUrl('voteCountGte', vote_count_gte, discover_url) !== false) {
        discover_url = makeUrl('voteCountGte', vote_count_gte, discover_url);
    } else {
        return false;
    }
    if(makeUrl('voteCountLte', vote_count_lte, discover_url) !== false) {
        discover_url = makeUrl('voteCountLte', vote_count_lte, discover_url);
    } else {
        return false;
    }
    if(makeUrl('releaseDateGte', release_date_gte, discover_url) !== false) {
        discover_url = makeUrl('releaseDateGte', release_date_gte, discover_url);
    } else {
        return false;
    }
    if(makeUrl('releaseDateLte', release_date_lte, discover_url) !== false) {
        discover_url = makeUrl('releaseDateLte', release_date_lte, discover_url);
    } else {
        return false;
    }
    if(makeUrl('sortBy', sort_by, discover_url) !== false) {
        discover_url = makeUrl('sortBy', sort_by, discover_url);
    } else {
        return false;
    }
    if(makeUrl('genre', genre, discover_url) !== false) {
        discover_url = makeUrl('genre', genre, discover_url);
    } else {
        return false;
    }
    if(makeUrl('notGenre', notGenre, discover_url) !== false) {
        discover_url = makeUrl('notGenre', notGenre, discover_url);
    } else {
        return false;
    }
    if(makeUrl('year', year, discover_url) !== false) {
        discover_url = makeUrl('year', year, discover_url);
    } else {
        return false;
    }

    discoverFinalUrl = discoverUrl + discover_url;
    searchFinalUrl = '';
    $('#link').html('<b>Link:</b> ' + discoverFinalUrl.replace('&region', '&amp;region'));

        ajaxCall(discoverFinalUrl);

});

//paginate
function checkPrevNextDisabled(currentPage) {
    if(currentPage < 2){
        $('#prev').prop( "disabled", true );
        $('#next').prop( "disabled", false );
     } else if (currentPage === maxPage){
         $('#prev').prop( "disabled", false );
         $('#next').prop( "disabled", true );
     } else {
        $('#prev').prop( "disabled", false );
        $('#next').prop( "disabled", false );
     }
}

$(document).on('click', '.paginate', function () {
    var btnId = $(this).attr('id');
    var witch_url = '';

    if(searchFinalUrl.length !== 0) {
        witch_url = searchFinalUrl;
    } else if(discoverFinalUrl.length !== 0) {
        witch_url = discoverFinalUrl;
    }

    if(btnId === 'prev') {
        currentPage = currentPage - 1;
        checkPrevNextDisabled(currentPage);
        ajaxCall(witch_url);
    } else if(btnId === 'next') {
        currentPage = currentPage + 1;
        checkPrevNextDisabled(currentPage);
        ajaxCall(witch_url);
    } else if (btnId.match(/^[0-9]+$/) !== null) {
        currentPage = btnId;
        checkPrevNextDisabled(currentPage);
        ajaxCall(witch_url);
    }
});

//discover inputs handle
$(document).on('click', '#yr', function () {
    $('#release-date-gte').empty();
    $('#release-date-lte').empty();
});

$(document).on('click', '#rGTE, #rLTE', function () {
    $('#year').empty();
});

$(document).on('change', '#genre', function () {
    $('#not-genre').find(":selected").prop('selected', false);
});

$(document).on('change', '#not-genre', function () {
    $('#genre').find(":selected").prop('selected', false);
});



$(document).on('click', '.clear-input', function () {
    clearInput($(this));
});

function clearInput (elem) {
    $(elem).closest('.search-inputs').find('input, select').each(function (i, elem) {
        if($(elem)[0].nodeName === 'SELECT') {
            $(elem).find(':selected').prop('selected', false);
        } else {
            $(elem).val('');
        }
    });
}
//erase text 
var captionLength = 0;
var caption = '';   

//$(document).ready(function() {
//    $('.clear-input').click(function(){
//        var inputs = $(this).closest('.search-inputs').find('input');
//    });
//});

function goErasingEffect(elem) {
    for(var i = inputs.length-1; i >= 0 ; i--) {
            console.log(i);
            goErasingEffect(inputs[i]);
        }
    captionEL = $(elem);
    caption = $(captionEL).val();
    captionLength = caption.length;

    if (captionLength > 0) {
        erase();
    }
}

function erase() {
    $(captionEL).val(caption.substr(0, captionLength--));
    console.log('intru', captionLength);
    if(captionLength >= 0) {
        setTimeout('erase()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }
}

//Require jQuery
//function scrollSmoothToBottom (id) {
//   var div = document.getElementById(id);
//   $('#' + id).animate({
//      scrollTop: div.scrollHeight - ($('.image-header').height()+200)
//   }, 500);
//}