// This the RollUp config from the rollup-starter-app repo
// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false

//const production = !process.env.ROLLUP_WATCH;

const commonjs = require( 'rollup-plugin-commonjs' );
const resolve = require( 'rollup-plugin-node-resolve' );

export default {
	input: 'src/main.js',
	output: {
		file: 'public/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		resolve(), // tells Rollup how to find modules in node_modules
		commonjs(), // convertscommonJS modules to ES modules
	]
};
