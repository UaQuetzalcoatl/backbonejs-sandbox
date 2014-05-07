define([
    'jquery',
    'underscore',
    'backbone',
    'views/UserListView'
], function ($, _, Backbone, UserListView) {
    var Router = Backbone.Router.extend({
        routes: {
            '/users': 'userList',
            'user/:id': 'userDetails',
            '*actions': 'userList' // default route
        }
    });

    var initialize = function () {
        var router = new Router();

        router.on('route:userList', function () {
            var userListView = new UserListView();
            userListView.render();
        });

        router.on('route:userDetails', function (id) {
            console.log('user id: ' + id);
        });

        console.log('history start');
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
