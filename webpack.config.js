const path = require('path');
const externals = require("webpack-node-externals");

module.exports = {
    entry: './server/index.ts',
    target: "node",
    externals: [externals()], 
    resolve: {
        extensions: ['.js', '.json', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'build')
    }
};