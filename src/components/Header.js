var m = require("mithril")

var Header = {
    view: function() {
        return m("nav", [
            m("a[href=/]", {oncreate: m.route.link}, "Home"),
            m("a[href=/About]", {oncreate: m.route.link}, "About"),
        ])
    }
}

module.exports = Header