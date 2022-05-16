/**
 * Sends a request to find information about the browser
 */
const getBrowserInfo = async () => {
	const response = await fetch(
		location.protocol + "//" + location.host + "/api/whoami"
	);

	const json = await response.json();

	return json;
};

/**
 * Inserts the value from the API in the element whose selector is provided
 */
const insertResponse = (selector, value) => {
	const element = document.getElementById(selector);
	console.log('Inserting "' + value + '" into #' + selector);
	element.textContent = value;
};

window.addEventListener("DOMContentLoaded", async () => {
	console.log("Sending a GET request to the API");
	const browserInfo = await getBrowserInfo();
	console.log("Information received: ");
	console.table(browserInfo);

	insertResponse("initial-ip", browserInfo.ipaddress);
	insertResponse("initial-language", browserInfo.language);
	insertResponse("initial-software", browserInfo.software);
});
