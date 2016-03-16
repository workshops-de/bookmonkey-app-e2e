var Navigation = function() {
  this.home = element(by.css('.item[href="#/"]'));
  this.books = element(by.css('.item[href="#/books"]'));
  this.login = element(by.css('.item[href="#/login"]'));
  this.logout = element(by.css('.item[ng-click]'));
};

module.exports = Navigation;