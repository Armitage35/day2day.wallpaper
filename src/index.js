import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// loading Quicksand font in a blob format to please chrome apps' security policies
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://fonts.googleapis.com/css?family=Quicksand:400,500", true);
xhr.responseType = "blob";
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		var myfontblob = window.URL.createObjectURL(xhr.response);
		var newStyle = document.createElement('style');
		newStyle.appendChild(document.createTextNode("@font-face {font-family: Quicksand; font-weight: 400; src: url('" + myfontblob + "') format(woff);}"));
		document.head.appendChild(newStyle);
	}
};
xhr.send();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
