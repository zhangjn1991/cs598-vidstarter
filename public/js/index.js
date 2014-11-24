(function(){

	var app = angular.module('VidStarter',[]);


	app.controller('GlobalController',['$scope','$sce','$http',function($scope,$sce,$http){		

		this.curResult = {};
		this.curVideoUrl = "";
		this.isOverlaying = false;
		this.allInputs = [];
		this.curInput = {};


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

		this.addInput = function (){
			this.allInputs.push(this.curInput);
			this.curInput = {};

			console.log("Add Input");
			$scope.urlForm.$setPristine();
		}

		this.search = function(){
			var resultController = this;
			var queryString = "";
			if(this.allInputs.length == 0)
				queryString = "/all";
			else
				queryString = "/matches/5472b5e92bf4344dcdb61a46"
			$http.get(queryString).success(function(data){
				resultController.allResults = data;
			})	
		}

		
	}]);

	


})();