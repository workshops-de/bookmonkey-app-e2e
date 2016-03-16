'use strict'

function booksIndex (booksApi) {
  booksApi.loadAll()
    .then(function (books) {
      this.books = books
    }.bind(this))
}

angular.module('myApp.books-index', [
  'myApp.booksApi'
])
  .component('booksIndex', {
    templateUrl: 'app/components/books-index/books-index.html',
    controller: booksIndex
  })
