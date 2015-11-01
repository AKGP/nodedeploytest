var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
console.log("Hey");
var refresh1 = function(){
$http.get('/rock_type_details').success(function(res){
$scope.rock_type_details=res;
$scope.rtd = "";
});
};
refresh1();
var refresh2 = function(){$http.get('/extensometer').success(function(res){
$scope.extensometer=res;
$scope.ext = "";
});
};
refresh2();
$scope.add1 = function(){
console.log($scope.rtd);
$http.post('/rock_type_details',$scope.rtd).success(function(response){
	console.log(response);
	refresh1();
});
};
$scope.add2 = function(){
console.log($scope.ext);
$http.post('/extensometer',$scope.ext);
refresh2();
};
$scope.add3 = function(){
console.log($scope.conv);
$http.post('/convergence',$scope.conv);
};
$scope.add4 = function(){
console.log($scope.str);
$http.post('/stressmeter',$scope.str);
};
$scope.add5 = function(){
console.log($scope.pre);
$http.post('/pressure_cell',$scope.pre);
};

$scope.add6 = function(){
console.log($scope.sis);
$http.post('/sisc_cell',$scope.sis);
};
$scope.add7 = function(){
console.log($scope.m_act);
$http.post('/mine_activities',$scope.m_act);
};
$scope.add8 = function(){
console.log($scope.g_pers);
$http.post('/geotech_personnel',$scope.g_pers);
};



}]);
