const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    entry: './path/to/your/entry-file.js',  // Replace with the correct path to your entry file
    output: {
        filename: 'bundle.js',  // The output bundled file name
        path: path.resolve(__dirname, 'dist')  // Output directory path
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',  // Optional: Use babel for transpiling
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};