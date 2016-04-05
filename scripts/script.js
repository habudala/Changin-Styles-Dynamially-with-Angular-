// creating a module called myModule
var angularStyle = angular.module("angularStyle",[]);



												// // creating a controller called myController
												// var myController  function($scope){
												// 	$scope.message = "Angular js tutorial";
												// }
												// //registering controller with module
												// myApp.controller("myController", myController);



//or alternatively, I can do the above two lines in one>>>
angularStyle.controller("styleController", function($scope){


	var people = [ {name:"Tristan", former:"Money guy"},
					{name:"Josh", former:"Porn star"},
					{name:"Bogdan", former:"Mechanic"},
					{name:"Laz", former:"KGB"},
					{name:"Keith", former:"Geologist"},
					{name:"Will", former:"Skeeing ninja"},
					{name:"Curtis", former:"IT Pro"},
					{name:"Joe", former:"Engineer"},
					{name:"Patric", former:"Outlaw"},
					{name:"Jonathan", former:"Handsome one"},
					{name:"Jeremy", former:"PI"},
	];

	
	$scope.people = people 

});
