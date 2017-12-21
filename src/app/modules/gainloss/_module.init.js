angular.module('tradeAnalysis.gainloss', [
	'tradeAnalysis.gainloss.controllers'
	])
	.config(["$stateProvider", function ($stateProvider) {
		$stateProvider
		.state('tradeAnalysis.gainloss', {
			url: "/gainloss",
			views: {
				'gainloss@': {
					templateUrl: "modules/gainloss/components/gainloss.tpl.html",
					controller: "gainlossController as vm"
				}
			},
			resolve: {
				mainData: [function () {
					console.log('main');
				}]
			}
		})
	}
	]);