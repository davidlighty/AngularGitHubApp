'use strict';

module.exports = {
    app: {
        title: 'GitHub Search',
        description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
        keywords: 'MongoDB, Express, AngularJS, Node.js'
    },
    port: process.env.PORT || 3000,
    templateEngine: 'swig',
    sessionSecret: 'MEAN',
    sessionCollection: 'sessions',
    assets: {
        lib: {
            css: [],
            imports: [
                'public/font-roboto/roboto.html',
                'public/lib/core-elements/core-elements.html',
                'public/lib/paper-elements/paper-elements.html'
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
