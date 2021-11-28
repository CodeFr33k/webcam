const path = require("path");
const webpack = require("webpack");

const BASE = process.env.NODE_ENV === 'production'
    ? '/webcam/'
    : '/';

module.exports = {
    publicPath: BASE,
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                BASE: '\'' + BASE + '\'',
            })
        ]
    }
};

