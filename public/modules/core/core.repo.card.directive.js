/* global angular */

(function() {
	'use strict';


    angular.module('core')
        .directive('repoCard', function() {
        	return{
        		restrict:'E',
                replace:true,
        		templateUrl:'modules/core/core.repo.card.view.html',
        		scope:{
        			repo:'='
        		}
        	};
        });
})();
