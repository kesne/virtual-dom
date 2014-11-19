var diff = require("./diff.js")
var patch = require("./patch.js")
// var h = require("./h.js")
var create = require("./create-element.js")
var domIndex = require("./vdom/dom-index.js")

module.exports = {
    diff: diff,
    patch: patch,
    // h: h,
    create: create,
    domIndex: domIndex
}
