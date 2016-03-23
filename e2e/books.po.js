function Books() {
  this.books = element.all(by.repeater('book in $ctrl.books'));
  this.bookTitles = element.all(by.repeater('book in $ctrl.books').column('book.title'));
}

module.exports = Books;