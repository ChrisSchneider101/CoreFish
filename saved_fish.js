
function appendFishItem(fish_item_div) {
	var stored_fish_div = document.getElementById("stored_fish_actual_container");
	var cloned_fish_item = fish_item_div.cloneNode(true);
	console.log(cloned_fish_item);
	//cloned_fish_item

	cloned_fish_item.addEventListener("click", function(event) {
		var fish_item = event.target.closest('.fish_item');
		fish_item.remove();
	})

	stored_fish_div.appendChild(cloned_fish_item);
}