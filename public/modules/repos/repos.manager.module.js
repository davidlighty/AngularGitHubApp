/*global angular, GitHubService, RepoModel */

/***

    GitHub Repos Manager

***/

(function () {
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
            timeoutDelay = 352,
            maxPages = 0,
            currentPage = 1,
            resultsPerPage = 30,
            scrollEvents = 0;

        $log.debug('ReposManager Init');

        mngr = {
            CurrentSearchTerm: null,
            Repos: [],
            Abort: abort,
            GetRepos: findRepos,
            GetMoreResults: getMoreResults
        };

        return mngr;

        //////////////
        
        /**
         * @name getMoreResults
         * @desc Keep track of # of events and ask for more results, if appicable.
         */
        function getMoreResults() {
            scrollEvents++;
            if (currentPage >= maxPages) return;
            $log.debug('GetMore?', scrollEvents, resultsPerPage * currentPage, maxPages);
            if ((scrollEvents) >= ((resultsPerPage * currentPage) / 2)) {
                // get more.
                currentPage++;
                findRepos(mngr.CurrentSearchTerm);
            }
        }

        function findRepos(searchTerm) {
            if (timeout) $timeout.cancel(timeout);
            if (searchTerm.length > 3) {
                timeout = $timeout(function () {
                    $log.debug('Searching: ', searchTerm);
                    mngr.CurrentSearchTerm = searchTerm;
                    return GitHubService.findRepo(mngr.CurrentSearchTerm, currentPage).then(function (resp) {
                        maxPages = Math.floor(resp.data.total_count / resultsPerPage);
                        $log.debug('Response', resp, resp.data.total_count, maxPages);
                        angular.forEach(resp.data.items, function (repo) {
                            mngr.Repos.push(new RepoModel(repo));
                        });
                    });
                }, timeoutDelay);
            }
        }

        /**
            @name abort
            @desc Clear out data array for a new search, cancel any current search.
        */
        function abort() {
            mngr.Repos.length = 0;
            if (timeout) $timeout.cancel(timeout);
        }

    }
})();
