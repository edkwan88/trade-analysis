angular.module('tradeAnalysis.portfolio', [
	'tradeAnalysis.portfolio.controllers'
	])
	.config(["$stateProvider", function ($stateProvider) {
		$stateProvider
		.state('tradeAnalysis.portfolio', {
			url: "/portfolio",
			views: {
				'main@': {
					templateUrl: "modules/portfolio/components/portfolio.tpl.html",
					controller: "portfolioController as vm"
				}
			},
			resolve: {
				mainData: [function () {
					
					console.log('now what main');
				}]
			}
		})
	}
	]);