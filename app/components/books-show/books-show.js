'use strict'

function booksShow (booksApi, $routeParams) {
  booksApi.loadByIsbn($routeParams.isbn)
    .then(function (book) {
      this.book = book
    }.bind(this))
}

angular.module('myApp.books-show', [
  'myApp.booksApi'
])
  .component('booksShow', {
    templateUrl: 'app/components/books-show/books-show.html',
    controller: booksShow
  })
