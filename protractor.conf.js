var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout : 11000,
  specs             : [
    'e2e/**/*.e2e.js'
  ],
  capabilities      : {
    'browserName' : 'chrome'
  },
  directConnect     : true,
  baseUrl           : 'http://localhost:3000/',
  framework         : 'jasmine',
  jasmineNodeOpts   : {
    showColors             : true,
    defaultTimeoutInterval : 30000,
    print                  : function () {
    }
  },
  onPrepare         : function () {
    var reporters = require('jasmine-reporters');

    jasmine.getEnv().addReporter(new reporters.JUnitXmlReporter({
      savePath: 'xmloutput',
      consolidateAll: true
    }));

    jasmine.getEnv().addReporter(new SpecReporter());
  },

  params: {
    email: 'robin@a.com'
  }

  };
