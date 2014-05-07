define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    var UserModel = Backbone.Model.extend({
        defaults: {
            id: null,
            username: 'Undefined User'
        },
        initialize: function (options) {
            this.id = options.id;
            this.username = options.username;
        },
        sayHello: function () {
            return 'Hello World!!! My name is ' + this.username + '. My id is ' + this.id;
        }
    });

    return UserModel;
});


