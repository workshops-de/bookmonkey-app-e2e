'use strict'

angular.module('myApp.booksApi', [])
  .service('booksApi', function ($http) {
    var baseUrl = 'http://bookmonkey-api.angularjs.de/books'

    function loadAll () {
      return $http.get(baseUrl)
        .then(function (booksResponse) { return booksResponse.data })
    }

    function loadByIsbn (isbn) {
      return $http.get(baseUrl + '/' + isbn)
        .then(function (bookResponse) { return bookResponse.data })
    }
    
    return {
      loadAll: loadAll,
      loadByIsbn: loadByIsbn
    }
  })
