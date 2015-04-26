/*global angular,GitHubService */

(function() {
    'use strict';

    /**
     *	@name HomeController
     *	@desc Home Controller for gitReview site
     */
    function HomeController($scope, $log, GitHubService) {
        var ctrl = this;
        $log.debug('GitHubService',GitHubService);

        // GitHubService.findRepo('test').then(function(resp){
        //     $log.debug('Response', resp);
        // });


    }

    HomeController.$inject = ['$scope','$log', 'GitHubService'];
    angular.module('core')
        .controller('HomeController', HomeController);

})();
