# NW Dashboard [![nicolaseckhart](https://circleci.com/gh/nicolaseckhart/nw-dashboard.svg?style=svg)](https://app.circleci.com/pipelines/github/nicolaseckhart/nw-dashboard)


## Setup

The expect node version is 13.7.0 so functionality may not work as expected on other versions.

```bash
bin/setup
```

## Run checks

```bash
bin/check
```

The command above runs linting checks with autocorrection as well as the test suite. These can be run individually using `yarn lint` and `yarn test`.

## Run application

```bash
yarn start
```

## Other

Consult `package.json` for other commands such as building for production.
