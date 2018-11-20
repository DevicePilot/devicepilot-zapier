
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

//These are automated tests for the Issue create and Issue Trigger.
//They will run every time the `zapier test` command is executed.
describe('issue trigger', () => {
  zapier.tools.env.inject();

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
        if (response.errors) {
          return done(new Error(response.errors));
        }
        done();
      })
      .catch(done);
  });
});
