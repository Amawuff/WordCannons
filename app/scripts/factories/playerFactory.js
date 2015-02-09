'use strict';

angular.module('wordCannonApp')
.factory('playerFactory', function ($q, letterFactory) {

	var player;

	 return {
            createPlayer: function(name) {
            	//set the name of player and health to 50
                player = {'name': name, 'health': 50, 'tiles': [] };
                    //get starting letters
                    letterFactory.getLetterRand(8)
                        .then( 
                            function (data,error){
                                //once the data has loaded set player.tiles
                                player.tiles = data;
                                }
                            );
                
                return player;
            }
        }
});