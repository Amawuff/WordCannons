'use strict';

  angular.module('wordCannonApp')
    // .directive('draggable', function () {
    //  return {
    //    restrict: 'A',
    //    link: function (scope, iElement, iAttrs) {
    //      console.log("beep");
    //    }
    //  };
    // })
    //
    .directive('draggable', function() {

      return function(scope, element) {
        // this gives us the native JS object

        var el = element[0];
        console.log('hey is this working');
        
        el.draggable = true;
        
        el.addEventListener(
          'dragstart',
          function(e) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('Text', this.id);
            this.classList.add('drag');
            return false;
          },
          false
        );

        el.addEventListener(
          'click',
          function(e) {
            /*e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('Text', this.id);
            this.classList.add('drag');*/
            console.log('click', e);
            return false;
          },
          false
        );
        
        el.addEventListener(
          'dragend',
          function(e) {
            this.classList.remove('drag');
            return false;
          },
          false
        );
      }
    });