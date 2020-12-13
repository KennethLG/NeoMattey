/*const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	entry: "./src/index.ts",
	devtool: 'inline-source-map',
	target: "node",
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				include: [path.resolve(__dirname, "src")],
				exclude: /node_modules/,
			}
		]
	},
	resolve: {
		extensions: [".ts", ".js", ".tsx"],
		modules: ["src", "node_modules"]
	},
	output: {
		publicPath: "dist",
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	}
}*/

const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

var config = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        modules: ["src", "node_modules"]
    }
};

var client = Object.assign({}, config, {
    name: "client",
    target: "web",
    entry: path.resolve(__dirname, "src/client/index.tsx"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
});

var server = Object.assign({}, config, {
    name: "server",
    target: "node",
    externals: [nodeExternals()],
    entry: path.resolve(__dirname, "src/server/index.ts"),
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, "dist")
    }
});

module.exports = [client, server];