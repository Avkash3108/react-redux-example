const WebpackConfigExample = require('@avkash3108/react_build_task').WebpackConfigExampleDevServer;

WebpackConfigExample.devServer.proxy = {
	'/**': {
		bypass(request) {
			if (request.headers.accept.indexOf('html') !== -1 || request.headers.accept.indexOf('css') !== -1) {
                return request.url;
            }
		},
		target: 'http://localhost:2222',
		secure: false,
        changeOrigin: true
	}
};
module.exports = WebpackConfigExample;
