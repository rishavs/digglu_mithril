var m = require("mithril")

var Header = require("./Header")

var Layout = {
    view: function(vnode) {
        return [
            m(Header),
            m("section", vnode.children)
        ]
    }
}

module.exports = Layout