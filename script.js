//your JS code here. If required.
const info = document.getElementById("browser-info");

function getInfo() {
	const browserName = navigator.userAgent;
	const version = navigator.appVersion;

	console.log("You are using " + browserName + "version " + version);
}