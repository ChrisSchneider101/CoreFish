
var page_version = "11.20.24 (2)"

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

//const era_voice = new Audio('sfx/cmon_kai.mp3');
const era_voice = new Audio('https://github.com/ChrisSchneider101/CoreFish/blob/main/sfx/cmon_kai.mp3?raw=true');

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
			// create elements
			var fish_div = document.createElement("div");
			fish_div.className = "fish_item";
			var fish_img = document.createElement("img");
			fish_img.src = fish[i].img_src;
			var fish_name = document.createElement("span");
			fish_name.innerHTML = "<b>" + fish[i].name + "</b>";
			var fish_points = document.createElement("span");
			var fish_points_calc = document.createElement("span");
			fish_points_calc.style.textAlign = "justified";
			fish_points_calc.style.color = "grey";

			// base points from size
			var points = size_value * size_measurement_value;
			fish_points_calc.innerHTML = "Base value: (" + points + ")";
			console.log(fish[i].name + "- base points: " + points);

			// whale / leed deduction
			if ((fish[i].name == "Whale") || (fish[i].name == "Leedsichthys")) {
				points = points / 2;
				fish_points_calc.innerHTML = fish_points_calc.innerHTML + "<br />Leed/Whale: x0.5 (" + Math.floor(points) + ")";
				console.log(fish[i].name + "- half base points for whale/leedsichthys: " + points);
			}

			// water bonus
			var water_mult = 1;
			var water_tag = "";
			var water_pool = "";
			switch (fish[i].water) {
				case "Saltwater":
					water_mult = saltwater_mult;
					water_tag = "Sa.Wa";
					water_pool = "Salt";
					break;
				case "Freshwater":
					water_mult = freshwater_mult;
					water_tag = "Fr.Wa";
					water_pool = "Fresh";
					break;
				case "Rain":
					water_mult = rain_mult;
					water_tag = "Rain";
					water_pool = "Misc";
					break;
				case "Alien":
					water_mult = alien_mult;
					water_tag = "Alien";
					water_pool = "Misc";
					break;
				case "Void":
					water_mult = void_mult;
					water_tag = "Void";
					water_pool = "Misc";
					break;
				case "Junk":
					water_mult = junk_mult;
					water_tag = "Junk";
					water_pool = "Junk";
					break;
				default:
					console.log("INVALID WATER SOURCE")
					water_mult = -999;
					water_tag = "where am i";
					water_pool = "is there water here";
					break;
			}
			points = points * water_mult;
			if ((water_mult != 1) && (fish[i].name != "Leedsichthys")) {
				fish_points_calc.innerHTML = fish_points_calc.innerHTML + "<br />" + water_pool + ": x" + water_mult + " (" + Math.floor(points) + ")";
			}
			console.log(fish[i].name + "- water mult (" + water_mult + "): " + points + " (" + water_tag + ")");	

			// unique bonus
			points = points * parseFloat(fish[i].unique_mult);
			if (parseFloat(fish[i].unique_mult) != 1) {
				fish_points_calc.innerHTML = fish_points_calc.innerHTML + "<br />Special: x" + parseFloat(fish[i].unique_mult) + " (" + Math.floor(points) + ")";
			}
			console.log(fish[i].name + "- unique mult (" + fish[i].unique_mult + "): " + points);

			// star bonus
			var star_mult = (1 + (0.5 * stars_value));
			points = points * star_mult;
			if (star_mult != 1) {
				fish_points_calc.innerHTML = fish_points_calc.innerHTML + "<br />Stars: x" + star_mult + " (" + Math.floor(points) + ")";
			}
			console.log(fish[i].name + "- star mult (" + star_mult + "): " + points);
			
			// round, finalize, and populate string
			points = Math.floor(points);
			fish_points.innerHTML = "<b>" + points + "</b>";

			// append elements
			fish_div.appendChild(fish_img);
			fish_div.appendChild(fish_name);
			fish_div.appendChild(fish_points);
			if (calc_value) fish_div.appendChild(fish_points_calc);

			fish_div.addEventListener("click", function(event) {
				var fish_item = event.target.closest('.fish_item');
				appendFishItem(fish_item);
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

document.getElementById("era_pic").addEventListener("click", function() {
	era_voice.play();
})


// start with fish table populated
updateFishContainer();

