(function(){


	var app = angular.module('SearchResult',[]);

	app.controller('GlobalController',['$scope','$sce',function($scope,$sce){		

		this.curResult = {};
		this.curVideoUrl = "";
		this.isOverlaying = false;
		this.hideOverlay = function(){
			this.isOverlaying = false;
			this.curResult={};
			this.curVideoUrl = "";
		}
		this.showOverlay = function(result){
			this.isOverlaying = true;
			this.curResult=result;
			this.curVideoUrl=$sce.trustAsResourceUrl(result.video);
		}
	}]);



	app.controller('FilterController',['$http',function($http){
		var filterController = this;
		$http.get('/resources/filters.json').success(function(data){
			filterController.allFilters = data;
		})
	}]);

	app.controller('ResultController',['$http','$log',function($http,$log){
		var resultController = this;
		$http.get('/resources/results.json').success(function(data){
			resultController.allResults = data;
		})


	}]);






})();