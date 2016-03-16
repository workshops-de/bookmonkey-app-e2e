'use strict'

function dashboard () {
  this.pi = Math.PI
  this.e = Math.E
  this.day = new Date().getDay()
}

angular.module('myApp.dashboard', [])
  .component('dashboard', {
    templateUrl: 'app/components/dashboard/dashboard.html',
    controller: dashboard
  })
