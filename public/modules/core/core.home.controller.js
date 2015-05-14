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
        var vm = this;

        vm.Repos = ReposManager.Repos;

//        $element.find('.search-results').bind('scroll', function () {
//            $log.debug('Scroll Event'); //works!
//        });

            var coreHeaderPanel = document.querySelector("core-header-panel");
            coreHeaderPanel.addEventListener("scroll", function (event) {
                $log.debug('window', window.pageXOffset, window.pageYOffset, window, coreHeaderPanel);
                $log.debug('Offsets', window.pageYOffset, vm.scrollY);
                if(!vm.scrollY || vm.scrollY < window.pageYOffset){
                    vm.scrollY = window.pageYOffset; // save.
                    ReposManager.GetMoreResults();    
                }
                
            });

        //////////////////////////////////////////////////////////////



    }



})();
