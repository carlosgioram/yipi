/**
 * Main file of webpack config.
 * Please do not modified unless you know what to do
 */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackRTLPlugin = require("webpack-rtl-plugin");
const WebpackMessages = require("webpack-messages");
const del = require("del");
/**
* mongodb
* Giovani ramirez
*/
var mongoose = require("mongoose");
var express=require('./express.config');
var port=3800;

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://yipitest.com:27017/lora', {useNewUrlParser: true})
		.then(()=>{
			console.log('conecte a base de datos');
			//crear servidor
			express.listen(port,()=>{
				console.log('servidor corriendo en http://localhost:3800');
			});
		})
		.catch(error =>console.log('esto es un error :::::::'+error));

// theme name
const themeName = "metronic";
// global variables
const rootPath = path.resolve(__dirname);
const distPath = rootPath + "/src/assets";

const entries = {
	"css/style.angular": "./src/assets/sass/style.angular.scss"
};

// remove older folders and files
(async () => {
	await del.sync(distPath + "/css", {force: true});
})();

const mainConfig = function () {
	return {
		mode: "development",
		stats: "errors-only",
		performance: {
			hints: false
		},
		entry: entries,
		output: {
			// main output path in assets folder
			path: distPath,
			// output path based on the entries' filename
			filename: "[name].js"
		},
		resolve: {extensions: ['.scss']},
		plugins: [
			// webpack log message
			new WebpackMessages({
				name: themeName,
				logger: str => console.log(`>> ${str}`)
			}),
			// create css file
			new MiniCssExtractPlugin({
				filename: "[name].css",
			}),
			new WebpackRTLPlugin({
				filename: "[name].rtl.css",
			}),
			{
				apply: (compiler) => {
					// hook name
					compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
						(async () => {
							await del.sync(distPath + "/css/*.js", {force: true});
						})();
					});
				}
			},
		],
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader",
						{
							loader: "sass-loader",
							options: {
								sourceMap: true,
							}
						},
					]
				},
			]
		},
	}
};

module.exports = function () {
	return [mainConfig()];
};
