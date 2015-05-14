/*global angular */

(function () {
    'use strict';

    angular.module('core')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$scope','$log', 'ReposManager'];


    /**
     * @name HeaderController
     * @desc Controller for the site fixed top header
     */
    function HeaderController($scope,$log, ReposManager) {
       
        $scope.isCollapsed = false;

        $scope.toggleCollapsibleMenu = function () {
            $scope.isCollapsed = !$scope.isCollapsed;
        };

        $scope.SearchRepos = searchRepos;



        function searchRepos() {
            ReposManager.Abort();
            if ($scope.repoSearchTerm.length > 3) {
                ReposManager.GetRepos($scope.repoSearchTerm);
            }
        }

    }



})();
