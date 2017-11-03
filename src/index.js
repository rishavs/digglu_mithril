var m = require("mithril")

var Layout = require("./components/Layout")
var Home = require("./pages/Home")
var About = require("./pages/About")

m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(Layout, m(Home))
        }
    },
    "/About": {
        render: function(vnode) {
            return m(Layout, m(About))
        }
    },
})
