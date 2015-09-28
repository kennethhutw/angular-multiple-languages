
app = angular.module('app', [
   'i18n'
]);

app.controller('appCtrl',['$scope','i18nService',
function ($scope,i18nService){  
   	  $scope.translate = function(){
	       i18nService.getTranslation($scope, $scope.selectedLanguage);
	   };
}]);

