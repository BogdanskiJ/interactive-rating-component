const ratingIcons = document.querySelectorAll(".firstBox .rating");
const submitButton = document.querySelector(".submitButton");
const firstBox = document.querySelector(".firstBox");
const secondBox = document.querySelector(".secondBox");
const selectedRate = document.querySelector(".selectedRate");
let selectedIcon = 0;

ratingIcons.forEach((element) => {
	element.addEventListener("click", () => {
		ratingIcons.forEach((el) => el.classList.remove("clicked"));

		element.classList.add("clicked");
		selectedIcon = element.innerText;
	});
});

submitButton.addEventListener("click", () => {
	if (selectedIcon !== 0) {
		firstBox.classList.toggle("hidden");
		secondBox.classList.toggle("hidden");
		selectedRate.innerText = selectedIcon;
	}
});
