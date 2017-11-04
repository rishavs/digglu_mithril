// src/models/Post.js
var m = require("mithril")

var Posts = {
    list: [],
    load_list: function() {
        return m.request({
            method: "GET",
            url: "https://data.diesel16.hasura-app.io/v1/template/get_all_posts",
            // withCredentials: true,
        })
        .then(function(result) {
            Posts.list = result
        })
    },

    current: {},
    load_post: function(id) {
        return m.request({
            method: "POST",
            url: "https://data.diesel16.hasura-app.io/v1/template/get_post",
            data:{"id": id}
        })
        .then(function(result) {
            Posts.current = result[0]
        })
    },

    // save_post: function() {
    //     return m.request({
    //         method: "PUT",
    //         url: "https://rem-rest-api.herokuapp.com/api/users/" + Post.current.id,
    //         data: Posts.current,
    //         withCredentials: true,
    //     })
    // }
}

module.exports = Posts