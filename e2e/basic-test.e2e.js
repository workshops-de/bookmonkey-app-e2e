var Navigation = require('./navigation.po');
var Login = require('./login.po');

describe('when the user Teddy B is created', function () {

  var navigation = new Navigation();
  var login = new Login();

  beforeAll(function () {
    browser.get('#/');
  });



  it('should show a dashboard after login', function () {
    navigation.login.click();
    login.email.sendKeys(browser.params.login.email);
    login.password.sendKeys(browser.params.login.password);
    login.submit.click();

    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '#/dashboard');

    navigation.logout.click();
  });


  it('should show a error-message on failed login', function () {
    navigation.login.click();

    expect(login.error.isPresent()).toBe(false);

    login.email.sendKeys(browser.params.login.email);
    login.password.sendKeys(browser.params.login.password + '!!!WRONGPW!!!');
    login.submit.click();

    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '#/login');


    expect(login.error.isPresent()).toBe(true);
  });


});