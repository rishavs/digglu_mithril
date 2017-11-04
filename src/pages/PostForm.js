// src/views/UserForm.js
var m = require("mithril")
var Posts = require("../models/Posts")

module.exports = {
    oninit: function(vnode) {Posts.load_post(vnode.attrs.id)},
    view: function() {
        return m("form", [
            m("label.label", "Title"),
            m("input.input[type=text][placeholder=Title]", {value: Posts.current.title}),
            m("label.label", "Content"),
            m("input.input[placeholder=Content]", {value: Posts.current.content}),
            m("button.button[type=button]", "Save"),
        ])
    }
}