Ext.define("Mini-shop.view.login.LoginController", {
  extend: "Ext.app.ViewController",
  alias: "controller.login",

  onLoginClick: function () {
    let window = this.getView();
    let ref = window.getReferences();
    let form = ref["loginform"].getForm();
    let me = this; // Capture reference to 'this'

    if (form.isValid()) {
      let formValues = form.getValues();

      // Construct JSON data
      let jsonData = {
        email: formValues.email,
        password: formValues.password,
      };

      Ext.Ajax.request({
        url: "http://localhost:3000/auth/login",
        method: "POST",
        jsonData: jsonData,
        success: function (response, opts) {
          var obj = Ext.decode(response.responseText);
          let userToken = obj.token;
          let userEmail = obj.email;
          let userId = obj._id;
          localStorage.setItem("miniShopLogin", true);
          localStorage.setItem("token", userToken);
          localStorage.setItem("userId", userId);
          localStorage.setItem("userEmail", userEmail);
          Ext.Msg.alert("Successful", "Welcome.");

          me.getView().destroy();
          // Add the main view to the viewport
          Ext.create({
            xtype: "app-main",
          });
        },

        failure: function (response, opts) {
          let errorMessage;
          switch (response.status) {
            case 400:
            case 404:
              errorMessage = "Incorrect email or password.";
              break;
            default:
              errorMessage =
                "Server-side failure with status code " + response.status;
              break;
          }

          Ext.Msg.show({
            title: "Login Failed",
            msg: errorMessage,
            buttons: Ext.Msg.OK,
            icon: Ext.Msg.ERROR,
          });
        },
      });
    } else {
      Ext.Msg.alert("Invalid Data", "Please correct form errors.");
    }

    // // Set the localStorage value to true
    // localStorage.setItem("miniShopLogin", true);

    // // Remove Login Window
    // this.getView().destroy();

    // // Add the main view to the viewport
    // Ext.widget('app-main');
  },
});
