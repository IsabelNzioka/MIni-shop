/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Mini.app.Application',

    name: 'Mini.app',

    requires: [
        // This will automatically load all classes in the Mini.app namespace
        // so that application classes do not need to require each other.
        'Mini.app.*'
    ],

    // The name of the initial view to create.
    mainView: 'Mini.app.view.main.Main'
});
