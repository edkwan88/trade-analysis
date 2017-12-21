angular.module('tradeAnalysis.menu', [])
	.controller('menuController', function($state, $q) {
		var vm = this;
		function selectModule(module) {
			console.log(module);
			$state.go('tradeAnalysis.' + module);
		}
		function login() {
			console.log ('login')
			var promises = [];
			$state.go('login');
		}
		//expose functions
		vm.login = login;
		vm.selectModule = selectModule;
	})