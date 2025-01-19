var page_version = "01.19.25"

document.getElementById("page_version").innerText = page_version;

//const era_voice = new Audio('sfx/cmon_kai.mp3');
const era_voice = new Audio('https://github.com/ChrisSchneider101/CoreFish/blob/main/sfx/cmon_kai.mp3?raw=true');
document.getElementById("era_pic").addEventListener("click", function() {
	era_voice.play();
})