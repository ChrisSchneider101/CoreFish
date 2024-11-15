
var page_version = "11.15.24 (2)"

document.getElementById("fish_set_version").innerText = fish_set_version;
document.getElementById("page_version").innerText = page_version;

var size_input = document.getElementById("size_input");
var size_measurement_input = document.getElementsByName("size_measurement_input");
var stars_input = document.getElementsByName("stars_input");
var search_input = document.getElementById("search_input");
var calc_input = document.getElementById("calc_input");
var fish_container = document.getElementById("fish_container");

var size_value = 0;
var size_measurement_value = 1;
var stars_value = 0;
var search_value = "";
var calc_value = false;


function onChangeSizeInput() {
	var size = parseFloat(document.getElementById("size_input").value);
	if (Number.isNaN(size)) size = 0;
	size_value = size;
	console.log("### size changed to " + size_value);
	updateFishContainer();
}

function onChangeStarInput() {
	var stars;
	for (i=0; i<stars_input.length; i++) {
		if (stars_input[i].checked) stars = parseInt(stars_input[i].value);
	}
	stars_value = stars;
	console.log("### stars changed to " + stars_value);
	updateFishContainer();
}

function onChangeSearchInput() {
	var search = search_input.value;
	search_value = search;
	console.log("### search changed to " + search_input.value);
	updateFishContainer();
}

function onChangeCalcInput() {
	var checked = calc_input.checked;
	calc_value = checked;
	console.log("### calc selection changed to " + calc_input.checked);
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
		if (fish[i].name.toLowerCase().includes(search_value.toLowerCase())) {
			var fish_div = document.createElement("div");
			fish_div.className = "fish_item";
			var fish_img = document.createElement("img");
			fish_img.src = fish[i].img_src;
			var fish_name = document.createElement("span");
			fish_name.innerHTML = "<b>" + fish[i].name + "</b>";
			var fish_points = document.createElement("span");
			var fish_points_calc = document.createElement("span");
			fish_points_calc.style.textAlign = "justified";
			var points = size_value * size_measurement_value;
			fish_points_calc.innerHTML = "Base value: (" + points + ")";
			console.log(fish[i].name + "- base points: " + points);
			if ((fish[i].name == "Whale") || (fish[i].name == "Leedsichthys")) {
				points = points / 2;
				fish_points_calc.innerHTML = fish_points_calc.innerHTML + "<br />Leed/Whale: x0.5 (" + Math.floor(points) + ")";
				console.log(fish[i].name + "- half base points for whale/leedsichthys: " + points);
			}
			if ((fish[i].water == "Freshwater") || (fish[i].water == "Rain") || (fish[i].water == "Alien")) {
				if (fish[i].name != "Leedsichthys") {
					points = points * 1.5;
					fish_points_calc.innerHTML = fish_points_calc.innerHTML + "<br />Fr.Wa./Rain: x1.5 (" + Math.floor(points) + ")";
					console.log(fish[i].name + "- freshwater or misc multiplier (1.5): " + points);
				}
			}
			else if (fish[i].water == "Junk") {
				points = 0;
				fish_points_calc.innerHTML = fish_points_calc.innerHTML + "<br />Junk: x0.0 (" + /*Math.floor(points)*/"gross" + ")";
				console.log(fish[i].name + "- junk multiplier (0): " + points);
			}
			points = points * parseFloat(fish[i].unique_mult);
			if (parseFloat(fish[i].unique_mult) != 1) {
				fish_points_calc.innerHTML = fish_points_calc.innerHTML + "<br />Unique Mult: x" + parseFloat(fish[i].unique_mult) + " (" + Math.floor(points) + ")";
			}
			console.log(fish[i].name + "- unique mult (" + fish[i].unique_mult + "): " + points);
			var star_mult = (1 + (0.5 * stars_value));
			//var star_mult = stars_value;
			points = points * star_mult;
			console.log(fish[i].name + "- star mult (" + star_mult + "): " + points);
			points = Math.floor(points);
			fish_points.innerHTML = "<b>" + points + "</b>";

			fish_div.appendChild(fish_img);
			fish_div.appendChild(fish_name);
			fish_div.appendChild(fish_points);
			if (calc_value) fish_div.appendChild(fish_points_calc);

			fish_div.addEventListener("click", function(event) {
				//console.log("hit");
				var fish_item = event.target.closest('.fish_item');
				console.log(fish_item);
			})

			fish_container.appendChild(fish_div);
		}
	}
}


// input event listeners
search_input.addEventListener("input",onChangeSearchInput);
calc_input.addEventListener("input",onChangeCalcInput);
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

