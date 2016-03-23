describe('hello page', function() {

  beforeEach(function(){
    browser.get('#/');
  })

  it('should set the correct text to h1', function() {

    expect(element(by.css('h1')).getText()).toBe('Hallo !');

    element(by.css('input')).sendKeys('Robin');

    expect(element(by.css('h1')).getText()).toBe('Hallo Robin!');
  });

  it('should also work with model and bindings', function(){

    expect(element(by.binding('name')).getText()).toBe('Hallo !');

    element(by.model('name')).sendKeys('Robin');

    expect(element(by.binding('name')).getText()).toBe('Hallo Robin!');

  })

});
