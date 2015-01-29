'use strict';

angular.module('wordCannonApp')
.factory('playerFactory', function ($q, letterFactory) {

	var player;

	 return {
            addPlayer: function(name, health) {
            	player = {'name': name, 'health': health, 'tiles': []};
                return player;
            },
            setTiles: function(tiles)
            {
            	player.tiles = player.tiles.concat(tiles);
            	return player;
            },
            getPlayer: function() {
                return player;
            }
        }
});