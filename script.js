$(document).ready(function() {

	var createCanvas = function(layerX) {
		if(!$("input").val()) {
			var dimention = 50;
		} else {
			var dimention = +$("input").val();
		};
		var quantity = Math.floor($('#main').width() / (dimention+1)) * Math.floor($(window).height() / (dimention+1));
		var squares = []; 
		for(var i = 1; i <= quantity; i++) {
			squares.push('<div class = "square"></div>');
		};
		$('#' + layerX).append(squares.join(""));
		$(".square").css("width", dimention + "px").css("height", dimention + "px").fadeIn();
	};

	
	var colorLayer = function(rgbaX, layerX) {
		createCanvas(layerX);
		$("#" + layerX).find(".square").css("background-color", rgbaX);
		$("#" + layerX).find(".square").on("mouseenter", function() {
			var currentColor = $(this).css("background-color");
			var last = currentColor.lastIndexOf(",");
			var opacity = parseFloat(currentColor.slice(last + 1));
			if(opacity < 1) {
				opacity += 0.2;
				var newColor = currentColor.slice(0, last + 1) + opacity + ")";
				$(this).css("background-color", newColor);
			};
		});
	};

	$("#reset").on("click", function() {
		$("#layer0").empty();
		$("#layer1").empty();
		$("#layer2").empty();
		createCanvas("layer0");
		colorLayer("rgba(255, 255, 255, 0)", "layer1");
	});
	
	$("#purple").on("click", function() {
		colorLayer("rgba(179, 0, 179, 0)", "layer2")	
	});


	createCanvas("layer0");
	colorLayer("rgba(255, 255, 255, 0)", "layer1");

	
});

