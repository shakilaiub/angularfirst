var angularfirst = angular.module('angularfirst',[]);

angularfirst.controller('helloHead', function($scope){

$scope.sayHello ="Angular Apps";


});


angularfirst.controller('EmpListCtrl', function($scope){

$scope.empList = [

{'name':'Golam Mostofa','department':'IT'},
{'name':'Shakil Hussain','department':'CSE'},
{'name':'Rajib Kumar','department':'PHY'},

];


});


angularfirst.controller('SalaryListCtrl', function($scope){

$scope.salList = [

{'employee_name':'Golam Mostofa','salary':'22500'},
{'employee_name':'Shakil Hussain','salary':'7500'},
{'employee_name':'Rajib Kumar','salary':'5000'},

];


});