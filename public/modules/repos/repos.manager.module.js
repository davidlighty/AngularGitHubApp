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
        var mngr, config = getConfig();

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
            config.scrollEvents++;
            if (config.currentPage >= config.maxPages) return;
            $log.debug('GetMore?', config.scrollEvents, config.resultsPerPage * config.currentPage, config.maxPages);
            if ((config.scrollEvents) >= ((config.resultsPerPage * config.currentPage) / 2)) {
                // get more.
                config.currentPage++;
                findRepos(mngr.CurrentSearchTerm);
            }
        }

        function findRepos(searchTerm) {
            if (config.timeout) $timeout.cancel(config.timeout);
            if (searchTerm.length > 3) {
                config.timeout = $timeout(function () {
                    $log.debug('Searching: ', searchTerm);
                    mngr.CurrentSearchTerm = searchTerm;
                    return GitHubService.findRepo(mngr.CurrentSearchTerm, config.currentPage).then(function (resp) {
                        config.maxPages = Math.floor(resp.data.total_count / config.resultsPerPage);
                        $log.debug('Response', resp, resp.data.total_count, config.maxPages);
                        angular.forEach(resp.data.items, function (repo) {
                            mngr.Repos.push(new RepoModel(repo));
                        });
                    });
                }, config.timeoutDelay);
            }
        }

        /**
            @name abort
            @desc Clear out data array for a new search, cancel any current search.
        */
        function abort() {
            if (config.timeout) $timeout.cancel(config.timeout);
            mngr.Repos.length = 0;
            config=getConfig();
        }

        function getConfig() {
            return {
                timeout: null,
                timeoutDelay: 352,
                maxPages: 0,
                currentPage: 1,
                resultsPerPage: 30,
                scrollEvents: 0
            };
        }

    }
})();
