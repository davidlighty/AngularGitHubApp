/***
	GitHubService Spec Tests
*/
(function() {
	'use strict';

	describe('GitHubService', function() {
		//Initialize global variables
		var GitHubService,
			httpBackend;

		// Load the main application module
		beforeEach(module('core'));

		beforeEach(inject(function(_GitHubService_, _$httpBackend) {
			GitHubService = _GitHubService_;
			httpBackend = _$httpBackend;
		}));

		it('should expose findRepo function', function() {
			expect(GitHubService.findRepo).toBeTruthy();
		});


		it('should expose getRepoData function', function() {
			expect(GitHubService.getRepoData).toBeTruthy();
		});
	});
})();