'use strict'

angular.module('myApp.session', [])
  .service('session', function ($q, $location) {

    var _isLoggedIn = false

    function login (email, password) {
      var valid = email.split('@')[0] === password
      if (valid) {
        _isLoggedIn = true
      }
      return $q.resolve(valid)
    }

    function logout () {
      $location.url('/')
      _isLoggedIn = false
      return $q.resolve(true)
    }

    function isLoggedIn () {
      return _isLoggedIn
    }

    return {
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn
    }
  })
