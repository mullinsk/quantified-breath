(function(){
  'use strict';

  angular
  .module('pft-app')
  .controller('DetailController', DetailController);

  function DetailController (pft, $routeParams) {
    var vm = this;
    debugger;
    pft.getPFTDetail($routeParams.restId)
    .then(function(data){
      vm.pft = data;
    });
  }
}());