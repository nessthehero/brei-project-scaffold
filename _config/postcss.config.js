module.exports = (file, options, env) => {
	'use strict';

	let config = {
		plugins: {}
	};

	if (typeof file.env !== 'undefined' && file.env === 'scss') {

		config.syntax = 'postcss-scss';

		config.plugins = {
			'postcss-sorting': {
				'order': [
					'custom-properties',
					'dollar-variables',
					{
						type: 'at-rule',
						name: 'extend'
					},
					'at-variables',
					'declarations',
					'rules',
					'at-rules'
				],
				'properties-order': 'alphabetical'
			}
		};

	} else {

		config.plugins = {
			'postcss-pxtorem': {
				mediaQuery: true,
				propList: [
					'bottom',
					'font',
					'font-size',
					'height',
					'left',
					'letter-spacing',
					'line-height',
					'margin*',
					'max-*',
					'padding*',
					'top',
					'width'
				]
			},
			'autoprefixer': {
				browsers: [
					'> 5% in US',
					'last 2 versions',
					'Firefox ESR',
					'IE >= 8',
					'iOS >= 8'
				],
				remove: false
			},
			'cssnano': false
		};

	}

	return config;

};