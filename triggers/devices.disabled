const sample = require('../samples/sampleDevice');

const triggerDevices = (z, bundle) => {
  const { inputData } = bundle;

  const body = {
    op: 'now',
  };
  if (inputData.filter) {
    body.select = {
      scopeFilterStr: inputData.filter,
    };
  }

  const requestPromise = z.request({
    method: 'POST',
    url: 'https://api.devicepilot.com/query',
    body,
  });
  return requestPromise
    .then((response) => {
      const content = JSON.parse(response.content);
      const dataArray = Object.keys(content).map((id) => {
        const datum = {
          ...content[id],
          id,
        };
        delete datum.$id;
        return datum;
      });
      return dataArray;
    });
};

module.exports = {
  key: 'devices',
  noun: 'Devices',

  display: {
    label: 'Get Devices',
    description: 'Triggers on device estate change',
  },

  operation: {
    inputFields: [
      {
        key: 'filter',
        label: 'Filter',
        required: false,
      },
    ],
    perform: triggerDevices,
    sample,
  },
};
