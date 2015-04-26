/* global angular */

/****

    GitHub Services

    Services Module to search repos and get data from GitHub
    
    Reference : https://developer.github.com/v3/

    Author: David Lighty
    Date:   4/25/2015
****/
(function() {
    'use strict';

    function GitHubService($http, $log) {
        $log.debug('Init GitHubService');
        var service=this;
        service.gitHubAPI = {
            baseURL: 'https://api.github.com',
            searchEndPoint: function(type, term) {
                return this.baseURL + '/search/' + type + '?q=' + term;
            },
            repoEndPoint: function(org, name) {
                return this.baseURL + '/org/' + org + '/repos/' + name;
            }
        };

        /**
            @name findRepo
            @desc Search GitHub for valid Repos by the search term.
        */
        service.findRepo = function(searchTerm) {
            return $http.get(service.gitHubAPI.searchEndPoint('repositories', searchTerm));
        };

        /**
                @name getRepoData
                @desc Get Repo Data from GitHub by repoName
            */
        service.getRepoData = function(repoName) {
            return null;
        };

    }

    GitHubService.$inject = ['$http', '$log'];
    angular.module('core')
        .service('GitHubService', GitHubService);
})();
