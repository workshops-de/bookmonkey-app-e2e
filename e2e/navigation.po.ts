var Navigation = function() {
  this.home = element(by.css('.item[href="#/"]'));
  this.answer = element(by.binding('answer'));
  this.button = element(by.className('question-button'));

  this.goToHome = function() {
    this.home.click();
  };
};

module.exports = Navigation;