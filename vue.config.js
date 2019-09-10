module.exports = {
    publicPath: '/vuecms',
    devServer: {
        proxy: {
            "/api": {
                target: "http://www.liulongbin.top:3005",
                changeOrigin: true
            }
        }
    },
}