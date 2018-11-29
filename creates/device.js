const sample = require('../samples/sampleDevice');

const createDevice = (z, bundle) => {
  const body = {
    $id: bundle.inputData.deviceId,
    ...bundle.inputData.payload,
  };
  const requestPromise = z.request({
    method: 'POST',
    url: 'https://api.devicepilot.com/devices',
    body,
  });
  return requestPromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'device',
  noun: 'Device',

  display: {
    label: 'Update Device Metadata',
    description: 'Send a device data point',
  },

  operation: {
    inputFields: [
      {
        key: 'deviceId',
        label: 'Device ID',
        helpText: 'The unique identifier for the device',
        required: true,
      },
      {
        key: 'payload',
        label: 'Payload',
        helpText: 'The device data payload in key/value format',
        required: true,
        dict: true,
      },
    ],
    perform: createDevice,
    sample,
  },
};
