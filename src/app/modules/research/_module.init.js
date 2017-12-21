angular.module('tradeAnalysis.research', [
	'tradeAnalysis.research.controllers'
	])
	.config(["$stateProvider", function ($stateProvider) {
		$stateProvider
		.state('tradeAnalysis.research', {
			url: "/research",
			views: {
				'research@main': {
					templateUrl: "modules/research/components/research.tpl.html",
					controller: "researchController as vm"
				}
			},
			resolve: {
				mainData: [function () {
					console.log('research');
				}]
			}
		})
	}
	]);