module.exports = {
    pages: {
        index: {
            entry: 'src/main.ts',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'ServerStatus'
        }
    },
    configureWebpack: {
        externals: {
            "axios": "axios",
        }
    }
};