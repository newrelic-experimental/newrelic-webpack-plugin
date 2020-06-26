const fs = require('fs')
const helper = require('./NewrelicWebpackPlugin/helper')
const pluginName = 'NewrelicWebpackPlugin';

class NewrelicWebpackPlugin {
  apply(compiler) {
    compiler.hooks.done.tap(pluginName, appendNewrelicToJsAssets);
  }
}

const appendNewrelicToJsAssets = function(stats) {
  // bail if what we want isn't there
  if(!stats.compilation) {return}
  if(!stats.compilation.assets) {return}

  // let's shorten that up
  const assets = stats.compilation.assets

  // get a list of all the possibly emitted asset files
  const keys = Object.keys(stats.compilation.assets)
  for (const key of keys) {
    let asset = assets[key]
    // if the asset hasn't been emitted or is not a
    // javascript fie, then vail
    if(!asset.emitted) { continue }
    if(!helper.isJavascript(asset)) { continue }

    // put the agent at the top of the compiled file
    const newSource = "require('newrelic');" + asset.source()
    fs.writeFile(asset.existsAt, newSource, function(err){
      if(err) throw err;
      // let the world know!
      // TODO: is there a webpack output function this
      //       should be going through
      console.log("\nAdded newrelic to " +  asset.existsAt + "\n")
    })
  }
}

module.exports = NewrelicWebpackPlugin
