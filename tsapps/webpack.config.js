const path = require('path')

module.exports = {
    entry: './build/main.js',
    mode: 'development',
    watch:true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};