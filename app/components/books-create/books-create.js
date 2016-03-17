'use strict'

function booksCreate (booksApi, $location) {

  this.handleSubmit = function (book) {
    return booksApi.create(book)
      .then(function () { $location.url('/books/' + book.isbn) })
  }
}

angular.module('myApp.books-create', [
  'myApp.booksApi'
])
  .component('booksCreate', {
    templateUrl: 'app/components/books-create/books-create.html',
    controller: booksCreate
  })
