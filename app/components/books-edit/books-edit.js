'use strict'

function booksEdit (booksApi, $routeParams, $location) {
  booksApi.loadByIsbn($routeParams.isbn)
    .then(function (book) {
      this.book = book
    }.bind(this))

  this.handleSubmit = function (book) {
    return booksApi.save(book)
      .then(function () { $location.url('/books/' + book.isbn) })
  }
}

angular.module('myApp.books-edit', [
  'myApp.booksApi'
])
  .component('booksEdit', {
    templateUrl: 'app/components/books-edit/books-edit.html',
    controller: booksEdit
  })
