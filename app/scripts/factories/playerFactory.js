'use strict';

angular.module('wordCannonApp')
.factory('playerFactory', function ($q, letterFactory) {

	var player;

	 return {
            createPlayer: function(name) {
            	//set the name of player and health to 50
                player = {'name': name, 'health': 50};
                 
                    
                
                return player;
            },
            getPlayer: function(){
                return player;
            },
            setPlayer: function(viewplayer){
                player = viewplayer;
                
            }
        }
});