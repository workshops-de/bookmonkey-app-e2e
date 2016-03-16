'use strict'

function navigation ($location) {
  this.isActive = function (route) {
    var routeExp = new RegExp(route)
    return routeExp.test($location.path())
  }
}

angular.module('myApp.navigation', [])
  .component('navigation', {
    templateUrl: 'app/components/navigation/navigation.html',
    controller: navigation
  })
