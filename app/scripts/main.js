const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
	item.addEventListener("toggle", () => {
		if (!item.open) {
			return;
		}

		// Keep only one FAQ open at a time to match compact layout.
		faqItems.forEach((otherItem) => {
			if (otherItem !== item) {
				otherItem.open = false;
			}
		});
	});
});

const slider = document.querySelector(".slider");

if (slider) {
	const track = slider.querySelector(".slider-track");
	const slides = Array.from(slider.querySelectorAll(".slider-image"));
	const dots = Array.from(slider.querySelectorAll(".slider-dot"));
	const prevButton = slider.querySelector(".slider-prev");
	const nextButton = slider.querySelector(".slider-next");
	let currentIndex = 0;

	const updateSlider = (index) => {
		currentIndex = (index + slides.length) % slides.length;
		track.style.transform = `translateX(-${currentIndex * 100}%)`;

		slides.forEach((slide, slideIndex) => {
			slide.classList.toggle("is-active", slideIndex === currentIndex);
		});

		dots.forEach((dot, dotIndex) => {
			dot.classList.toggle("is-active", dotIndex === currentIndex);
		});
	};

	prevButton.addEventListener("click", () => {
		updateSlider(currentIndex - 1);
	});

	nextButton.addEventListener("click", () => {
		updateSlider(currentIndex + 1);
	});

	dots.forEach((dot, dotIndex) => {
		dot.addEventListener("click", () => {
			updateSlider(dotIndex);
		});
	});

	updateSlider(0);
}
