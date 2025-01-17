const webpack = require('webpack');
const baseConfig = require('@swup/webpack-config');
const name = require('./package.json').name;
const upperFirst = require('lodash/upperFirst');
const camelCase = require('lodash/camelCase');
const last = require('lodash/last');

const unscoped = last(name.split('/'))
const PascalCaseName = upperFirst(camelCase(unscoped));

const config = Object.assign({}, baseConfig, {
	entry: {
		[PascalCaseName]: './entry.js',
		[`${PascalCaseName}.min`]: './entry.js'
	},
	output: {
		path: __dirname + '/dist/',
		library: PascalCaseName,
		libraryTarget: 'umd',
		filename: '[name].js'
	}
});

module.exports = config;