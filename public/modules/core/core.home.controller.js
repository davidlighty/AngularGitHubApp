/*global angular,GitHubService,ReposManager */

(function () {
    'use strict';

    // Bind to Angular
    HomeController.$inject = ['$scope', '$window', '$log', 'ReposManager'];
    angular.module('core')
        .controller('HomeController', HomeController);

    /**
     *  @name HomeController
     *  @desc Home Controller for gitReview site
     */
    function HomeController($scope, $window, $log, ReposManager) {
        var vm = this;

        vm.Repos = ReposManager.Repos;

        var coreHeaderPanel = document.querySelector("core-header-panel");
        coreHeaderPanel.addEventListener("scroll", function (event) {
            var scrollerY = event.detail.target.scrollTop;
            $log.debug('scrollY', scrollerY);
            if (!vm.scrollY || vm.scrollY < scrollerY) {
                vm.scrollY = scrollerY; // save.
                ReposManager.GetMoreResults();
            }

        });

    }

})();
