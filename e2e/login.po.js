var Login = function() {
  this.email = element(by.model('$ctrl.email'));
  this.password = element(by.model('$ctrl.password'));
  this.submit = element(by.css('button.submit'));
  this.error = element(by.css('div.error'));
};

module.exports = Login;