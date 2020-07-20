const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    return {
        entry: path.resolve(__dirname, "src/root"),
        output: {
            filename: "bexs-root-config.js",
            libraryTarget: "system",
            path: path.resolve(__dirname, "dist"),
        },
        devtool: "sourcemap",
        module: {
            rules: [
                {parser: {system: false}},
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [{loader: "babel-loader"}],
                },
            ],
        },
        devServer: {
            historyApiFallback: true,
            disableHostCheck: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: false,
                template: "public/index.html",
                templateParameters: {
                    isLocal: env && env.isLocal === "true",
                },
            }),
            new CleanWebpackPlugin(),
        ],
        externals: ["single-spa", /^@bexs\/.+$/],
    };
}