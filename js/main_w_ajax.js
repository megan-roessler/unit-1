//initialize function called when the script loads
//add parameters and log to console
function initialize(){
	cities();
	debugAjax();
	debugCallback();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Seattle',
			population: 724745
		},
		{
			city: 'Vancouver',
			population: 631490
		},
		{
			city: 'Waco',
			population: 136436
		}
	];

	//append the table element to the div
	$('#mydiv').append("<table>");

	//append a header row to the table
	$("table").append("<tr>");
	
	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");
	
	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    addColumns(cityPop);
    addEvents();
};

function addColumns(cityPop){
    
    $('tr').each(function(i){

    	if (i == 0){
			//add missing letter to append
    		$(this).append('<th>City Size</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
				//change citySize to correct case
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
			//add parentheses around this
			//add missing bracket to td
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

function addEvents(){
	//remove hashtag from table
	$('table').mouseover(function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);
			//remove quotes around random
			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};

		$(this).css('color', color);
	}; 
	//remove ), move to line 106

	function clickme(){

		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
    });
};

//COMMENTED OUT CODE FROM MODULE 3 DIRECTIONS
//added console.log to access data
//cannot access because data is defined in line 116
//console.log(mydata);

//function jQueryAjax(){
    //define a variable to hold the data
    //var mydata;
	
    //basic jQuery ajax method
    //$.ajax("data/MegaCities.geojson", {
       // dataType: "json",
        //success: function(response){
            //mydata = response;

            //check the data
            //console.log(mydata);
        //}
    //});

    //check the data
    //console.log(mydata);
//};
//added console.log to access data
//cannot access because console.log is outside of the function
//console.log(mydata);

function debugAjax(){
	//add equal sign to define mydata
	var mydata = $.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
		}
	});
	console.log(mydata);
	//add missing / to </br>
	$(mydiv).append('<br>GeoJSON data:</br>' + JSON.stringify(mydata));
};

function debugCallback(response){
	//comment out repeat
	// $(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
};

//comment out repeat?
//$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));

//FROM MODULE 3 DIRECTIONS
//$(document).ready(jQueryAjax);

//call the initialize function when the document has loaded
//add missing bracket
$(document).ready(initialize);