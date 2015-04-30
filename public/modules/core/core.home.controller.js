/*global angular,GitHubService,ReposManager */

(function () {
    'use strict';

    // Bind to Angular
    HomeController.$inject = ['$scope', '$element', '$log', '$timeout', 'ReposManager'];
    angular.module('core')
        .controller('HomeController', HomeController);

    /**
     *  @name HomeController
     *  @desc Home Controller for gitReview site
     */
    function HomeController($scope, $element, $log, $timeout, ReposManager) {
        var vm = this,
            timeout, timeoutDelay = 350;

        $scope.SearchRepos = searchRepos;
        vm.Repos = ReposManager.Repos;

        $element.find('.search-results').bind('scroll', function () {
            $log.debug('Scroll Event'); //works!
        });

            var coreHeaderPanel = document.querySelector("core-header-panel");
            coreHeaderPanel.addEventListener("scroll", function (event) {
                $log.debug('Scroll Event', event); //works!
                ReposManager.GetMoreResults();
            });

        //////////////////////////////////////////////////////////////


        function searchRepos() {
             ReposManager.Abort();
            if ($scope.repoSearchTerm.length > 3) {
                ReposManager.GetRepos($scope.repoSearchTerm);
            }
        }
    }



})();
