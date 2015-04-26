/*global angular,GitHubService */

(function() {
    'use strict';

    /**
     *  @name HomeController
     *  @desc Home Controller for gitReview site
     */
    function HomeController($scope, $log, GitHubService) {
        var vm = this;
        $log.debug('GitHubService', GitHubService);

        function findRepos() {
            $log.debug('Searching: ', $scope.repoSearchTerm);
            if($scope.repoSearchTerm.length>3){
                GitHubService.findRepo($scope.repoSearchTerm).then(function(resp) {
                    $log.debug('Response', resp);
                    vm.Repos = resp.data.items;
                });    
            }            
        }

        $scope.findRepos = findRepos;

    }

    HomeController.$inject = ['$scope', '$log', 'GitHubService'];
    angular.module('core')
        .controller('HomeController', HomeController);

})();
