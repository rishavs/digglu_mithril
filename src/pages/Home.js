var m = require("mithril")
var Posts = require("../models/Posts")

var Home = {
    oninit: Posts.load_list,
    view: function() {
        return m(".post-list", Posts.list.map(function(post) {
            return m("a.post-list-item", {href: "/post/edit/" + post.id, oncreate: m.route.link}, post.title)
        }))
    }
}

module.exports = Home