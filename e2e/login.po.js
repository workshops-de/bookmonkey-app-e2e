function LoginPage() {
  this.email = element(by.css('[data-test="login.email"]'));
  this.password = element(by.css('[data-test="login.password"]'));
  this.submit = element(by.css('[data-test="login.submit"]'));

  this.submitForm = function(){
    this.submit.click();
  };

}

module.exports = LoginPage;