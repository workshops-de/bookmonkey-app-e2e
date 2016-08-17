import {Config} from 'protractor';


export let config:Config = {
    allScriptsTimeout: 11000,
    specs: [
        'e2e/**/*.e2e.js'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:3000/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () {
        }
    }
};
