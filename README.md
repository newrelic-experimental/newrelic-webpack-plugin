[![New Relic Experimental header](https://github.com/newrelic/open-source-office/raw/master/examples/categories/images/Experimental.png)](https://github.com/newrelic/open-source-office/blob/master/examples/categories/index.md#category-new-relic-experimental)

# New Relic Webpack Plugin

This project is an experimental plugin that allows [New Relic's NodeJS Agent](https://github.com/newrelic/node-newrelic) to work with webpack compiled **server side** javascript.  This plugin does not automatically instrument any frontend javascript frameworks -- please see [New Relic's browser agent documentation](https://docs.newrelic.com/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent) for more information on monitoring frontend javascript frameworks.

## Installation

We distribute this plugin via NPM.  To add it to your project, just run

    $ npm install @newrelic/webpack-plugin

## Getting Started

One installed, to get started add an `externals` and `plugins` section to your webpack configuration that looks something like this

    /*...*/

    const nodeExternals = require('@newrelic/webpack-plugin/lib/externals')
    const NewrelicWebpackPlugin = require('@newrelic/webpack-plugin/lib/NewrelicWebpackPlugin')

    module.exports = {
      /* ... */
      externals: [nodeExternals()],
      plugins: [
        new NewrelicWebpackPlugin()
      ]
      /* ... */
    }

## How This Works

In order to use Newrelic's NodeJS agent with webpack, you'll need to

1. Ensure the modules New Relic instruments are listed as webpack externals.
2. Add `require('newrelic')` to the top of your generated sources.

This package allows you to do both.  The `nodeExternals` function

    const nodeExternals = require('newrelic-webpack-plugin/lib/externals')

    /* ... */

    module.exports = {
      /* ... */
      externals: [nodeExternals()],
      /* ... */
    }

is borrowed from [webpack-node-externals](https://www.npmjs.com/package/webpack-node-externals), which is the de-facto standard way to use webpack with NodeJS server side projects. If [a module the agent instruments](https://github.com/newrelic/node-newrelic/blob/master/lib/instrumentations.js#L6) is **not** listed as a webpack external, the agent will not function properly.

The `NewrelicWebpackPlugin`

    const NewrelicWebpackPlugin = require('newrelic-webpack-plugin/lib/NewrelicWebpackPlugin')

    module.exports = {
      /* ... */
      plugins: [
        new NewrelicWebpackPlugin()
      ]
      /* ... */
    }

ensures that a `require('newrelic')` statment is added to the top of any `.js` asset file generated by webpack.

## Testing

You can run tests for this repository via npm

    $ npm run test

## Support

New Relic hosts and moderates an online forum where customers can interact with New Relic employees as well as other customers to get help and share best practices. Like all official New Relic open source projects, there's a related Community topic in the New Relic Explorers Hub. You can find this project's topic/threads here:

https://discuss.newrelic.com/t/experimental-webpack-plugin-for-nodejs/88068/20

## Contributing

We encourage your contributions to improve the New Relic Webpack Plugin! Keep in mind when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. You only have to sign the CLA one time per project.
If you have any questions, or to execute our corporate CLA, required if your contribution is on behalf of a company,  please drop us an email at opensource@newrelic.com.

## License
New Relic Webpack Plugin is licensed under the [Apache 2.0](http://apache.org/licenses/LICENSE-2.0.txt) License.
>[If applicable: The [project name] also uses source code from third-party libraries. You can find full details on which libraries are used and the terms under which they are licensed in the third-party notices document.]
