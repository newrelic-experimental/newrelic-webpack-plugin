'use strict'
// very cheap, possibly problematic, MVP
const isJavascript = function (asset) {
  if(!asset['existsAt']) { return false }
  if(!asset.existsAt.split) { return false }
  const parts = asset.existsAt.split('.')
  const extension = parts.pop()
  return extension === 'js'
}
module.exports = {
  isJavascript
}
