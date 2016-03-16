'use strict'

function login ($location, session) {
  this.login = function (email, password) {
    session.login(email, password)
      .then(function (success) {
        console.log(success)
        if (!success) {
          this.error = 'The given email or password are invalid.'
          return
        }

        $location.url('/dashboard')

      }.bind(this))
  }
}

angular.module('myApp.login', [])
  .component('login', {
    templateUrl: 'app/components/login/login.html',
    controller: login
  })
