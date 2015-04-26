/*global angular */

(function() {
    'use strict';

    /**
     * @name HeaderController
     * @desc Controller for the site fixed top header
     */
    function HeaderController($scope) {
        $scope.isCollapsed = false;

        $scope.toggleCollapsibleMenu = function() {
            $scope.isCollapsed = !$scope.isCollapsed;
        };
    }

    HeaderController.$inject = ['$scope'];

    angular.module('core')
        .controller('HeaderController', HeaderController);

})();
