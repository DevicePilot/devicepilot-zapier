const sample = require('../samples/sampleDevice');

const createDevice = (z, bundle) => {
  const requestPromise = z.request({
    method: 'POST',
    url: 'https://api.devicepilot.com/devices',
    body: JSON.stringify(bundle.inputData.data),
  });
  return requestPromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'device',
  noun: 'Device',

  display: {
    label: 'Create Device',
    description: 'Send a device data point',
  },

  operation: {
    inputFields: [
      {
        key: 'data',
        label: 'Data',
        helpText: 'The only required field is $id for the unique device identifier',
        required: true,
        dict: true,
      },
    ],
    perform: createDevice,
    sample,
  },
};
