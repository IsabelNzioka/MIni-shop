/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define("Mini.app.Application", {
  extend: "Ext.app.Application",

  name: "Mini.app",

  quickTips: false,
  platformConfig: {
    desktop: {
      quickTips: true,
    },
  },

  onAppUpdate: function () {
    Ext.Msg.confirm(
      "Application Update",
      "This application has an update, reload?",
      function (choice) {
        if (choice === "yes") {
          window.location.reload();
        }
      }
    );
  },

  launch: function (profile) {
    // It's important to note that this type of application could use
    // any type of storage, i.e., Cookies, LocalStorage, etc.
    var loggedIn;

    // Check to see the current value of the localStorage key
    loggedIn = localStorage.getItem("miniShopLogin");

    // This ternary operator determines the value of the TutorialLoggedIn key.
    // If TutorialLoggedIn isn't true, we display the login window,
    // otherwise, we display the main view
    Ext.widget(loggedIn ? "app-main" : "login");
 
  },
});
