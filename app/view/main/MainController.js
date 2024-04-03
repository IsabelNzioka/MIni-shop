/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("Mini.app.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",

  onUserEmailRender: function(displayField) {
    var userEmail = localStorage.getItem('userEmail'); // Retrieve user email from local storage
    if (userEmail) {
      displayField.setValue(userEmail); // Set the user email value to the display field
    }
  },

  onLogout: function () {
    // Remove the localStorage key/value
    localStorage.removeItem("miniShopLogin");
    localStorage.clear("token");
    localStorage.clear("userId");
    localStorage.clear("userEmail");

    // Remove Main View
    this.getView().destroy();

    // Add the Login Window
    Ext.widget("login");
  },
});
