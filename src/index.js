var m = require("mithril")

var Layout = require("./components/Layout")
var Home = require("./pages/Home")
var About = require("./pages/About")
var PostForm = require("./pages/PostForm")

m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(Layout, m(Home))
        }
    },
    "/About": {
        render: function() {
            return m(Layout, m(About))
        }
    },
    "/post/edit/:id": {
        render: function(vnode) {
            return m(Layout, m(PostForm, vnode.attrs))
        }
    },
    "/post/new/": {
        render: function(vnode) {
            return m(Layout, m(UserForm, vnode.attrs))
        }
    },
})
