(() => {
	const popupButton = document.getElementById("signinPopupButton");
	const formFrame = document.getElementById("hiringFormFrame");

	if (!popupButton || !formFrame) {
		return;
	}

	const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd3f8PWCGRct_jpiqt5tOqyt_8boeZ9pxXtkyboOEgcbBAhYg/viewform?embedded=true";
	let waitingForReturn = false;

	const reloadForm = () => {
		formFrame.src = formUrl;
	};

	window.addEventListener("focus", () => {
		if (!waitingForReturn) {
			return;
		}

		waitingForReturn = false;
		reloadForm();
	});

	popupButton.addEventListener("click", () => {
		waitingForReturn = true;
	});
})();
