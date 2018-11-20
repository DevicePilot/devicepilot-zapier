const should = require('should');
const zapier = require('zapier-platform-core');
const App = require('../../index');

const appTester = zapier.createAppTester(App);

const testDevice = {
  $id: 'test-device',
  now: Date.now(),
  currentTemperature: 20,
  targetTemperature: 21,
  latitude: 51.5,
  longitude: 0.12,
};

const badDevice = {
  bad: true,
};

describe('creates/device', () => {
  zapier.tools.env.inject();

  it('should fail to create a device without an $id', (done) => {
    const bundle = {
      authData: {
        apiKey: process.env.TEST_APIKEY,
      },
      inputData: {
        data: badDevice,
      },
    };
    appTester(App.creates.device.operation.perform, bundle)
      .then((response) => {
        should.exist(response.errors);
        done();
      })
      .catch(done);
  });

  it('should create a device', (done) => {
    const bundle = {
      authData: {
        apiKey: process.env.TEST_APIKEY,
      },
      inputData: {
        data: testDevice,
      },
    };
    appTester(App.creates.device.operation.perform, bundle)
      .then((response) => {
        should.not.exist(response.errors);
        done();
      })
      .catch(done);
  });
});
