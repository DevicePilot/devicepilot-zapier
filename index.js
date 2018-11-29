const { version: platformVersion } = require('zapier-platform-core');
const { version } = require('./package.json');
const authentication = require('./authentication');
const createDevice = require('./creates/device');
const triggerDevices = require('./triggers/devices');

// We can roll up all our behaviors in an App.
const App = {
  // This is just shorthand to reference the installed dependencies you have. Zapier will
  // need to know these before we can upload
  version,
  platformVersion,

  authentication: authentication.auth,

  // beforeRequest & afterResponse are optional hooks into the provided HTTP client
  beforeRequest: [
    authentication.addApiKeyToHeader,
  ],

  afterResponse: [
  ],

  // If you want to define optional resources to simplify creation of triggers,
  // searches, creates - do that here!
  resources: {
  },

  // If you want your trigger to show up, you better include it here!
  triggers: {
    [triggerDevices.key]: triggerDevices,
  },

  // If you want your searches to show up, you better include it here!
  searches: {
  },

  // If you want your creates to show up, you better include it here!
  creates: {
    [createDevice.key]: createDevice,
  },
};

// Finally, export the app.
module.exports = App;
