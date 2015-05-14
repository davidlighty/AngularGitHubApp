/* global angular, GitHubService */

/**
 *	GitHub Repo Constant
 *	Use this to represent a repo that we are showing/working with in the app.
 */

(function() {
    'use strict';

    angular.module('Repos').constant('RepoModel', RepoModel);


    function RepoModel(data) {
        var dateLastUpdated = Date.parse(data.updated_at);
        var lastUpdateDiff_ms =(Date.now() - dateLastUpdated);
        
        if(lastUpdateDiff_ms < 86400000){ // less than a day in ms
            data.lastupdate_diff = lastUpdateDiff_ms;    
        }       
                 
        return {
        	data:data
        };
    }

})();
