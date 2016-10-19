var path = require('path');
var webpack = require('webpack');

var SRC = path.resolve(__dirname, "app");

module.exports = {
    entry: SRC + '/main.js',
    output: { path: __dirname, filename: 'bundle.js' },
    module: {
        loaders: [
            {
                loader: 'babel',
                include: SRC,
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
        ]
    },
};