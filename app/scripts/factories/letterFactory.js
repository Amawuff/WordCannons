"use strict";

angular.module('wordCannonApp')
	.factory('letterFactory',function($http){
	
	$http.get("/data/tiles.json")
	.success(function(data, status){
		console.log(data)
	})
	.error(function(data, status){
		console.log(data, status)
	})
	
	return{

	}
	}) 
		
			
				




			
            
				


