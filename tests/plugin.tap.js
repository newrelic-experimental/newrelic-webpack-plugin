const tap = require('tap')
const NewrelicWebpackPlugin = require('../lib/NewrelicWebpackPlugin')
const pluginHelper = require('../lib/NewrelicWebpackPlugin/helper')

tap.equal(pluginHelper.isJavascript({existsAt:'foo.js'}), true)
tap.equal(pluginHelper.isJavascript({existsAt:'foo.css'}), false)

tap.equal(pluginHelper.isJavascript({existsAt:'path.css/to/foo.js'}), true)
tap.equal(pluginHelper.isJavascript({existsAt:'path.js/to/foo.css'}), false)

tap.equal(pluginHelper.isJavascript({}), false)
tap.equal(pluginHelper.isJavascript({existsAt:null}), false)
tap.equal(pluginHelper.isJavascript({existsAt:''}), false)
tap.equal(pluginHelper.isJavascript({existsAt:{}}), false)
tap.equal(pluginHelper.isJavascript({existsAt:[]}), false)
