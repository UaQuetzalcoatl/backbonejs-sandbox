define([
    'jquery',
    'underscore',
    'backbone',
    'collections/UserCollection',
    'text!../../templates/user/list'
], function ($, _, Backbone, UserCollection, userListTemplate) {
    var UserListView = Backbone.View.extend({
        el: $('#page'),
        render: function () {
            this.collection = new UserCollection();
            this.collection.add({id: 1, username: 'Barack Obama'});
            this.collection.add({id: 2, username: 'Sadam Hussein'});
            this.collection.add({id: 3, username: 'Ernesto Che Guevarra'});
            this.collection.add({id: 4, username: 'Fidel Castro'});

            var compiledTemplate = _.template(userListTemplate, {users: this.collection.models});
            this.$el.html(compiledTemplate);
        }
    });

    return UserListView;
});