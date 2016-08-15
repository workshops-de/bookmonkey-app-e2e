var Navigation = require('./navigation.po');
var LoginPage = require('./login.po');

describe('Books', function(){

  var navigation = new Navigation();
  var loginPage = new LoginPage();

  beforeEach(function(){
    browser.get('#/');
  });

  it('should login with params', function() {
    navigation.goToLogin();

    loginPage.email.sendKeys(browser.params.email);
    loginPage.password.sendKeys(browser.params.password);
    loginPage.submitForm();

    browser.pause();

    expect(browser.getLocationAbsUrl()).toBe('/dashboard')
  });


});