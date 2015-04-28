/*global angular,GitHubService,ReposManager */

(function() {
    'use strict';

    // Bind to Angular
    HomeController.$inject = ['$scope', '$log', '$timeout', 'ReposManager'];
    angular.module('core')
        .controller('HomeController', HomeController);

    /**
     *  @name HomeController
     *  @desc Home Controller for gitReview site
     */
    function HomeController($scope, $log, $timeout, ReposManager) {
        var vm = this,
            timeout, timeoutDelay = 350;

        $scope.findRepos = findRepos;
        vm.Repos = ReposManager.Repos;

        //////////////////////////////////////////////////////////////


        function findRepos() {
            if ($scope.repoSearchTerm.length > 3) {
                $log.debug('Searching: ', $scope.repoSearchTerm);
                ReposManager.GetRepos($scope.repoSearchTerm);
            }else{
                ReposManager.Abort();
            }
        }
    }



})();
