$(function() {
	$.ajax({
            url: "https://community-open-beer-database.p.mashape.com/beers.json",
            dataType: 'json',
            type: 'GET',
            success: function (beer) {
                getBeer(beer);
            },

        });
         function getBeer(beer) {
        	for(var i=0; i<beer.length; i++){
        		var beerType= beer[i];
        		$('#example').append('<div class="beer_id">' + '<h2>' + beerType.name + '</h2>' + '</div>');
        	
        	}
        }
});