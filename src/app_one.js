AppOne = angular.module('AppOne', ['ui.router']); // rejestrujemy aplikacje pod `AppOne``
AppOne.controller('NameController', ['$scope', function($scope){
$scope.name = 'Mateusz'; //haszmapa odwołanie od razu do adresu 
}]);

//zad2
AppOne.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/name");
  //
  // Now set up the states
  $stateProvider
    .state('name', {
      url: "/name",
      templateUrl: "src/ptrng.tmplt.html",
      controller: function($scope) {
        $scope.name = 'Mateusz';
      }
    })
	.state('hello_world', {
      url: "/hello_world",
      templateUrl: "src/hello_world.html"
	  })
	
	
	
});


AppOne.directive('ptrngName',function()
{
return{
restrict: 'E',
template: 'Your name is {{name}}'
};
});