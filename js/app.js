angular.module("madLibApp", ['ngAnimate']).
controller("madlibController", function($scope){
	
	$scope.generated = false;

	$scope.setupData = [
	{id: 'maleName',placeholder: "Male Name", type: "text", data : 'Akmal'},
	{id: 'dirtyTask',placeholder: "Dirty Task", type: "text", data :'doing laundry'},
	{id: 'obnoCelebrity',placeholder: "Obnoxious Celebrity", type: "text", data :"blasting bob"},
	{id: 'jobTitle',placeholder: "Job Title", type: "text", data : 'plumber'},
	{id: 'tediousTask',placeholder: "Tedious Task", type: "text", data : 'picking trash'},
	{id: 'celebrity',placeholder: "Celebrity", type: "text", data : 'David Beckham'},
	{id: 'uselessSkill',placeholder: "Useless skill", type: "text", data : 'flying backwards'},
	{id: 'adjective',placeholder: "Adjective", type: "text", data : 'fastest'},
	{id: 'hugeNumber',placeholder: "Huge Number", type: "number", data : 5674}
	];

	$scope.find = function(q){
		for (var i = 0, len = $scope.setupData.length; i < len; i++) {
			if($scope.setupData[i].id == q){
				return $scope.setupData[i].data;
			}
		}
	};

	$scope.reset = function(){
		for (var i = 0, len = $scope.setupData.length; i < len; i++) {
			$scope.setupData[i].data = '';
		}
		$scope.generated = false;
	};
});
