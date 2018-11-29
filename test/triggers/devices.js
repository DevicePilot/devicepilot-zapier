const should = require('should');
const zapier = require('zapier-platform-core');
const App = require('../../index');

const appTester = zapier.createAppTester(App);

describe('devices/estate', () => {
  zapier.tools.env.inject();

  it('should fetch the device estate', (done) => {
    const bundle = {
      authData: {
        apiKey: process.env.TEST_APIKEY,
      },
    };

    appTester(App.triggers.devices.operation.perform, bundle)
      .then((response) => {
        const firstRecord = response[0];
        should.exist(firstRecord);
        should.exist(firstRecord.id);
        should.not.exist(firstRecord.$id);
        done();
      })
      .catch(err => done(err));
  });

  it('should fetch a device with a filter', (done) => {
    const bundle = {
      authData: {
        apiKey: process.env.TEST_APIKEY,
      },
      inputData: {
        filter: '$id === \'test-device\'',
      },
    };

    appTester(App.triggers.devices.operation.perform, bundle)
      .then((response) => {
        should.equal(response.length, 1);
        should.equal(response[0].id, 'test-device');
        done();
      })
      .catch(err => done(err));
  });
});
