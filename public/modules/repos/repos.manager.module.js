/*global angular, GitHubService, RepoModel */

/***

    GitHub Repos Manager

***/

(function() {
    'use strict';

    ReposManager.$inject = ['$log', '$timeout', 'GitHubService', 'RepoModel'];
    angular.module('Repos')
        .factory('ReposManager', ReposManager);


    /**
        @name ReposManger
        @desc Handles getting repos and creating our client side models of repos.
    */
    function ReposManager($log, $timeout, GitHubService, RepoModel) {
        var mngr,
            timeout,
            timeoutDelay = 352;

        $log.debug('ReposManager Init');

        mngr = {
            Repos: [],
            Abort: abort,
            GetRepos: findRepos
        };

        return mngr;

        //////////////

        function findRepos(searchTerm) {
            abort();
            if (searchTerm.length > 3) {
                timeout = $timeout(function() {
                    return GitHubService.findRepo(searchTerm).then(function(resp) {
                        $log.debug('Response', resp);
                        angular.forEach(resp.data.items, function(repo) {
                            mngr.Repos.push(new RepoModel(repo));
                        });
                    });
                }, timeoutDelay);
            }
        }

        function abort() {
            mngr.Repos.length = 0;
            if (timeout) $timeout.cancel(timeout);
        }

    }
})();
