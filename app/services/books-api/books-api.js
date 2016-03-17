'use strict'

angular.module('myApp.booksApi', [])
  .service('booksApi', function ($http) {
    var baseUrl = 'http://localhost:4730/books'

    function loadAll () {
      return $http.get(baseUrl)
        .then(function (booksResponse) { return booksResponse.data })
    }

    function loadByIsbn (isbn) {
      return $http.get(baseUrl + '/' + isbn)
        .then(function (bookResponse) { return bookResponse.data })
    }

    function save (book) {
      return $http.put(baseUrl + '/' + book.isbn, book)
        .then(function (resultRespnse) { return resultRespnse.data })
    }

    function create (book) {
      return $http.post(baseUrl + '/', book)
        .then(function (resultRespnse) { return resultRespnse.data })
    }

    return {
      loadAll: loadAll,
      loadByIsbn: loadByIsbn,
      save: save,
      create: create
    }
  })
