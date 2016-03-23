function Navigation() {
  this.books = element(by.css('[data-test="nav.books"]'));
  this.home = element(by.css('[data-test="nav.home"]'));
  this.login = element(by.css('[data-test="nav.login"]'));
  this.logout = element(by.css('[data-test="nav.logout"]'));

  this.goToHome = function(){
    this.home.click();
  };

  this.goToLogin = function(){
    this.login.click();
  };
}

module.exports = Navigation;