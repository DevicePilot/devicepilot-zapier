# DevicePilot Zapier integration

DevicePilot is a universal cloud-based software service allowing you to easily locate, monitor and manage your connected devices at scale, with proactive management of the entire device lifecycle.

This is the repository for our Zapier integration (https://zapier.com/).

## Authentication

To use the Zapier integration you must use your API key from the app. You can find this on your User Settings page, or via the Getting Started wizard.

## Zapier Actions

* **Create Device** - Sends device data to DevicePilot using a dictionary of fields, allowing the user to specify which fields they want to use.

## Development

Ensure that you have the Zapier CLI tools installed: https://zapier.com/developer/start/install-the-zapier-cli

## Testing

To run the unit tests, ensure that you have a `.env` file in the root directory with a valid DevicePilot API key, in the format:

```
TEST_APIKEY=0000000000000000
```

## Deploying

To be able to deploy you will need to be authorised via `zapier login` and must be a contributor to the project.

You will then be able to run `yarn deploy` to push the new version.

## Documentation

For more information about using DevicePilot, check out: https://help.devicepilot.com/.
