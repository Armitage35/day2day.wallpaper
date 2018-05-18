// mandatory content for chromeOS apps. Also defines size for the newly created window
chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('index.html', {
		'outerBounds': {
			'width': 1140,
			'height': 650
		}
	});
});
