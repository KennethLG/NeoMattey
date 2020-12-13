const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

module.exports = {
	entry: "./src/client/index.tsx",
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
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
}