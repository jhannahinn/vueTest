
module.exports = {
devServer: {
		proxy: {
			"^/ttl": {
				// main server
				target: "http://localhost:7122",
				// 개발
				//target: "http://192.168.20.88:5000",
				// 내pc
				//target: "http://192.168.20.88:5000",
				logLevel: 'debug',
				changeOrigin: true,
				pathRewrite: {
					'^/ttl' : ''
				}
			}
		}
	}
};
