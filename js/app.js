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
					hugeNumber:'5674325'};

});
