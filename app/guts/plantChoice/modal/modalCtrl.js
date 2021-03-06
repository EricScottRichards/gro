var app = angular.module('gro');
app.controller('modalCtrl', function($scope, $modalInstance, $stateParams, veggie, user, plantService, authService){
	console.log(veggie)

	$scope.user        = user;
	$scope.veggie      = veggie;
	$scope.imagePath   = $scope.veggie.imgUrl
	$scope.saveDataArr = [];

	$scope.setDates = function(info){
		$scope.sowDateInfo = info;
	}

	$scope.addSowDates = function(){
    $modalInstance.close({
			name     : veggie.name,
			sowInfo  : $scope.saveDataArr,
			imgPath  : $scope.veggie.imgUrl,
			localImg : $scope.veggie.localImg
		});
	};

  $scope.cancel = function(){
    $modalInstance.dismiss(false);
  };

  $scope.conArr = function(){
  	console.log($scope.saveDataArr)
  }
})