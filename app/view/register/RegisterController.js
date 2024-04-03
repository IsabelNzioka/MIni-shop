Ext.define("Mini-shop.view.register.RegisterController", {
  extend: "Ext.app.ViewController",
  alias: "controller.register",
  onLoginClick: function () {
    let me = this;
    var loginWindow = Ext.create("Mini-shop.view.login.Login");
    me.getView().destroy();
    loginWindow.show();
  },

  onRegisterClick: function () {
    let window = this.getView();
    let ref = window.getReferences();
    let form = ref["registerform"].getForm();
    let me = this; // Capture reference to 'this'

    if (form.isValid()) {
      let formValues = form.getValues();

      // Construct JSON data
      let jsonData = {
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
      };

      //creating account -> register
      Ext.Ajax.request({
        url: "http://localhost:3000/auth/register",
        method: "POST",
        jsonData: jsonData,
        success: function (response, opts) {
          Ext.Msg.alert("Successful", "Successful, Proceed to login ");
          setTimeout(function () {
            var loginWindow = Ext.create("Mini-shop.view.login.Login");
            loginWindow.show();
          }, 1300);

          me.getView().destroy();
        },

        failure: function (response, opts) {
          let errorMessage;
          switch (response.status) {
            case 400:
              errorMessage = "Bad Request: " + response.responseText;
              break;
            default:
              errorMessage = "Server-side failure";
              break;
          }

          Ext.Msg.show({
            title: "Registration Failed",
            msg: errorMessage,
            buttons: Ext.Msg.OK,
            icon: Ext.Msg.ERROR,
          });
        },
      });
    } else {
      Ext.Msg.alert("Invalid Data", "Please correct form errors.");
    }
  },
});
