angular.module("madLibApp", []).
controller("madlibController", function($scope){
	$scope.data = {maleName: 'John', 
				   jobTitle:'plumber',
				   tediousTask: 'picking trash',
				   dirtyTask: 'doing laundry',
					celebrity:'David Beckham',
					uselessSkill:'flying backwards',
					obnoCelebrity:'Blasting Bob',
					adjective:'fastest',
					hugeNumber:5674};

	
	$scope.generated = false;

	$scope.submit = function(){
		
		$scope.generated = true;
		console.log("submit");
	};

	$scope.reset = function(){
		$scope.data = {maleName: '', 
				   jobTitle:'',
				   tediousTask: '',
				   dirtyTask: '',
					celebrity:'',
					uselessSkill:'',
					obnoCelebrity:'',
					adjective:'',
					hugeNumber:''
		};
		$scope.generated = false;
	};



});
