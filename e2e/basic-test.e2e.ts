var Navigation = require('./navigation.po.ts');

describe('when the user Teddy B is created', function(){

  var navigation = new Navigation();

  beforeAll(function() {
    browser.get('#/');
    navigation.goToHome();
  });

  it('should exist', function() {
    expect(element(by.css('ng-view')).getText()).toEqual(['Teddy B']);
  });

});