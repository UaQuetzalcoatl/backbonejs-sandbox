define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    var Router = Backbone.Router.extend({
        routes: {
            '/users': 'usersList',
            'user/:id': 'userDetails',
            '*actions': 'usersList' // default route
        }
    });

    var initialize = function () {
        var router = new Router();

        router.on('route:usersList', function () {
            console.log('users list');
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


