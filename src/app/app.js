angular.module('tradeAnalysis',[
	'templates-app', 'ui.bootstrap', 'ui.router', 'ngMaterial',
	'tradeAnalysis.core.authentication',
	'tradeAnalysis.menu',
	'tradeAnalysis.portfolio',
	'tradeAnalysis.gainloss',
	'tradeAnalysis.research'])
	.config(function ($locationProvider, $stateProvider) {
		$locationProvider.html5Mode(true);
		$stateProvider
		.state('tradeAnalysis', {
			url : '/',
			resolve: {
				date: function () {
					console.log('trade anal');
				}
			}
		})
/*		.state('tradeAnalysis.main', {
			url : '/',
			resolve: {
				date: function () {
					console.log('trade anal2');
				}
			}
		});
*/	})
	.controller('tradeAnalysisController', function() {
		
	})
