requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery: 'jquery/dist/jquery'
    }
});

// Start the main app logic.
requirejs(['jquery', 'underscore/underscore', 'backbone/backbone'],
    function ($, _, backbone) {
        console.log('Load!!');
    }
);