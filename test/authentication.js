'use strict';
const should = require('should');

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);


describe('api key authentication', () => {
  // Put your test TEST_USERNAME and TEST_PASSWORD in a .env file.
  // The inject method will load them and make them available to use in your
  // tests.
  zapier.tools.env.inject();

  it('should authenticate', (done) => {
    const bundle = {
      authData: {
        apiKey: process.env.TEST_APIKEY,
      }
    };

    appTester(App.authentication.test, bundle)
      .then((response) => {
        should.exist(response.$id);
        done();
      })
      .catch(done);
  });

});
