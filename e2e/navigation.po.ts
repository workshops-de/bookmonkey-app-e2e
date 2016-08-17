import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor/globals';

export class Navigation {


  books = element(by.css('[data-test="nav.books"]'));
  home = element(by.css('[data-test="nav.home"]'));
  login = element(by.css('[data-test="nav.login"]'));
  logout = element(by.css('[data-test="nav.logout"]'));

  goToHome(){
    this.home.click();
  };

  goToLogin(){
    this.login.click();
  };
}