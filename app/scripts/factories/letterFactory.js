'use strict';

angular.module('wordCannonApp')
	.factory('letterFactory', function($http, $q){

	var lettersData = null;
	
	//gets data
	function init()
	{
		var deferred = $q.defer();
		$http.get('/data/tiles.json')
			.success(function(data, status){
				lettersData = data.tiles;
				deferred.resolve();
			})
			.error(function(data, status){
				console.log(data, status);
			});
		return deferred.promise;
	}

	//gets letters from data
	function letterHelper(n)
	{
		var letters = [];
		if(n == undefined){
			n=1
		};
		//loop through and get n letters.
		for (var i = 0; i < n; i++) {
			letters[i] = lettersData[Math.floor(Math.random()*99)];
		};
		return letters;
		
	}

	return{

		getLetterRand : function(n){
		var deferred = $q.defer();	
		
		if(lettersData == null){
			//Data is null, getting data
			init().then(function()
			{
				
				deferred.resolve(letterHelper(n));	
			})
		}
		else{

			deferred.resolve(letterHelper(n));

		};
		return deferred.promise;
	
		}


	};
	}); 