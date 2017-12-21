angular.module('tradeAnalysis.core.authentication', 
		['tradeAnalysis.core.authentication.controllers'])
	.config(["$stateProvider", function ($stateProvider, $q) {
		$stateProvider
		.state('login', {
			url: "/login",
			views: {
				'login@': {
					templateUrl: "core/authentication/components/test.tpl.html"
				}
			},
			resolve: {
				mainData: [function () {
					console.log('mod login');
				}]
			}
		})
	}
	]);