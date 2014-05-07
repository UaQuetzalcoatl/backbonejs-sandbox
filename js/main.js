require.config({
    //baseUrl: 'js/lib',
    paths: {
        jquery: 'lib/jquery/dist/jquery',
        backbone: 'lib/backbone/backbone',
        underscore: 'lib/underscore/underscore',
        text: 'lib/requirejs-text/text' // A RequireJS/AMD loader plugin for loading text resources
    }
});

require([
    'app'
], function (App) {
    App.initialize();
});