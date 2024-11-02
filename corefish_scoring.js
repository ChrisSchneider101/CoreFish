
var size_input = document.getElementById("size_input");
var size_measurement_input = document.getElementsByName("size_measurement_input");
var stars_input = document.getElementsByName("stars_input");
var search_input = document.getElementById("search_input");
var fish_container = document.getElementById("fish_container");

var size_value = 0;
var size_measurement_value = 1;
var stars_value = 0;
var search_value = "";

// size
// function getSizeInput() {
// 	var size = parseInt(document.getElementById("size_input").value);
// 	if (Number.isNaN(size)) size = 0;
// 	//console.log("return size: " + size);
// 	return size;
// }

function onChangeSizeInput() {
	var size = parseFloat(document.getElementById("size_input").value);
	if (Number.isNaN(size)) size = 0;
	size_value = size;
	console.log("### size changed to " + size_value);
	updateFishContainer();
}


// stars
// function getStarInput() {
// 	var stars;
// 	for (i=0; i<stars_input.length; i++) {
// 		if (stars_input[i].checked) stars = parseInt(stars_input[i].value);
// 	}
// 	//console.log("return stars: " + stars);
// 	return stars;
// }

function onChangeStarInput() {
	var stars;
	for (i=0; i<stars_input.length; i++) {
		if (stars_input[i].checked) stars = parseInt(stars_input[i].value);
	}
	stars_value = stars;
	console.log("### stars changed to " + stars_value);
	updateFishContainer();
}


// search
// function getSearchInput() {
// 	var search = search_input.value;
// 	//console.log("return search: " + search);
// 	return search;
// }

function onChangeSearchInput() {
	var search = search_input.value;
	search_value = search;
	console.log("### search changed to " + search_input.value);
	updateFishContainer();
}

function onChangeSizeMeasurementInput() {
	var size_mult;
	for (i=0; i<size_measurement_input.length; i++) {
		if (size_measurement_input[i].checked) size_mult = parseInt(size_measurement_input[i].value);
	}
	size_measurement_value = size_mult;
	console.log("### size measurement changed to " + size_measurement_value);
	updateFishContainer();
}

// fish container
function updateFishContainer() {
	fish_container.innerHTML = "";
	for (i=0; i<fish.length; i++) {
		//console.log(fish[i]);
		if (fish[i].name.toLowerCase().includes(search_value.toLowerCase())) {
			//console.log(fish[i].name);
			var fish_div = document.createElement("div");
			fish_div.className = "fish_item";
			var fish_img = document.createElement("img");
			fish_img.src = fish[i].img_src;
			var fish_name = document.createElement("span");
			fish_name.innerText = fish[i].name;
			var fish_points = document.createElement("span");
			var points = size_value * size_measurement_value;
			console.log(fish[i].name + "- base points: " + points);
			if ((fish[i].name == "Whale") || (fish[i].name == "Leedsichthys")) {
				points = points / 2;
				console.log(fish[i].name + "- half base points for whale/leedsichthys: " + points);
			}
			if ((fish[i].water == "Freshwater") || (fish[i].water == "Rain") || (fish[i].water == "Alien")) {
				if (fish[i].name != "Leedsichthys") {
					points = points * 1.5;
					console.log(fish[i].name + "- freshwater or misc multiplier (1.5): " + points);
				}
			}
			else if (fish[i].water == "Junk") {
				points = 0;
				console.log(fish[i].name + "- junk multiplier (0): " + points);
			}
			points = points * parseFloat(fish[i].unique_mult);
			console.log(fish[i].name + "- unique mult (" + fish[i].unique_mult + "): " + points);
			var star_mult = (1 + (0.5 * stars_value));
			//var star_mult = stars_value;
			points = points * star_mult;
			console.log(fish[i].name + "- star mult (" + star_mult + "): " + points);
			points = Math.floor(points);
			fish_points.innerText = points;


			fish_div.appendChild(fish_img);
			fish_div.appendChild(fish_name);
			fish_div.appendChild(fish_points);
			fish_container.appendChild(fish_div);
		}
	}
	// fish_container
}


// input event listeners
search_input.addEventListener("input",onChangeSearchInput);
size_input.addEventListener("input",onChangeSizeInput);
size_input.addEventListener("change",onChangeSizeInput);
for (i=0; i<stars_input.length; i++) {
	stars_input[i].addEventListener("click",onChangeStarInput);
}
for (i=0; i<size_measurement_input.length; i++) {
	size_measurement_input[i].addEventListener("click",onChangeSizeMeasurementInput);
}


// start with fish table populated
updateFishContainer();

