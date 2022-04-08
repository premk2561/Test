const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.join(__dirname, "src", "default-theme", "default.scss"),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.?(js | jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
             }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
}