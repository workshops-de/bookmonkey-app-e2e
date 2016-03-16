'use strict'

function navigation ($location, session) {
  this.isLoggedIn = session.isLoggedIn
  this.logout = session.logout

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
