/* global angular, GitHubService */

/**
 *	GitHub Repo Constant
 *	Use this to represent a repo that we are showing/working with in the app.
 */

(function() {
    'use strict';

    RepoModel.$inject = ['GitHubService'];
    angular.module('Repos').constant('RepoModel', RepoModel);


    function RepoModel(data) {
        return {
        	data:data
        };
    }

})();
