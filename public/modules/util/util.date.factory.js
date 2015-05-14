/**
 * Util Module :: Date functions
 */
(function () {

	angular.module('util')
		.factory('date', dateFactory);

	dateFactory.$inject = ['$log'];
	function dateFactory($log) {
		var self = this;
		var day_in_ms = 1000 * 60 * 60 * 24;
		
		self.diffInDays=function(start,end){
			var diff = start-end;
			diff = Math.abs(diff);
			diff = Math.floor(diff/day_in_ms);
			return diff;	
		};
	}

})();