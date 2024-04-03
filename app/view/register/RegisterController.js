Ext.define("Mini-shop.view.register.RegisterController", {
  extend: "Ext.app.ViewController",
  alias: "controller.register",

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
          var obj = Ext.decode(response.responseText);
          let userToken = obj.token;
          let userEmail = obj.email;
          let userId = obj._id;
          localStorage.setItem("miniShopLogin", true);
          localStorage.setItem("token", userToken);
          localStorage.setItem("userId", userId);
          localStorage.setItem("userEmail", userEmail);
          Ext.Msg.alert("Successful", "Proceed to login.");

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
  },
});
