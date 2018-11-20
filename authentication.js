module.exports.auth = {
  type: 'custom',
  connectionLabel: 'API Key',
  test: {
    url: 'https://api.devicepilot.com/users/me',
  },
  fields: [
    {
      key: 'apiKey',
      type: 'string',
      required: true,
      helpText: 'This can be found on your settings page, or via the Getting Started wizard.',
    },
  ],
};

module.exports.addApiKeyToHeader = (request, z, bundle) => {
  request.headers.Authorization = `Token ${bundle.authData.apiKey}`;
  return request;
};
