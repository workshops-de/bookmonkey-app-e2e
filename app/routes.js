'use strict'

angular.module('myApp.routes', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<h1>Hallo {{name}}!</h1><input type="text" ng-model="name">'
      })
      .when('/books', {
        template: '<books-index></books-index>'
      })
      .when('/books/:isbn', {
        template: '<books-show></books-show>'
      })
      .when('/login', {
        template: '<login></login>'
      })
      .when('/dashboard', {
        template: '<dashboard></dashboard>'
      })
  })
