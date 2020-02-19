var path = require('path')
var url = require('url');

var requestResponseMap = [
    {
    	apiPath: 'pizzas',
    	response: './pizza.json'
    }
];

function getRequestResourcePath(reqquest) {
	 var requestedURL = url.parse(reqquest.url, true);
	 var apiPath = path.join(requestedURL.pathname, requestedURL.search ? requestedURL.search : '').substr(1);
	 var requestedItem = requestResponseMap.find(function(requestMap) {
		return apiPath === requestMap.apiPath;
	});

	return requestedItem ? requestedItem.response : '/';
}

module.exports = {
	getRequestResourcePath
}