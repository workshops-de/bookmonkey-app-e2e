import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor/globals';

export class LoginPage {
  email = element(by.css('[data-test="login.email"]'));
  password = element(by.css('[data-test="login.password"]'));
  submit = element(by.css('[data-test="login.submit"]'));

  submitForm = function(){
    this.submit.click();
  };



}