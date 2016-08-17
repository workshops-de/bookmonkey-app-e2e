import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor/globals';

export class Books {
  books = element.all(by.repeater('book in $ctrl.books'));
  bookTitles = element.all(by.repeater('book in $ctrl.books').column('book.title'));
}
