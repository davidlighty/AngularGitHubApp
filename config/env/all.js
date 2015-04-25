'use strict';

module.exports = {
	app: {
		title: 'gitReview',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
			],
			js: [
				'public/lib/angular/angular.js'
			]
		},
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};