Ext.define('Mini.app.view.checkout.CheckoutFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.checkoutformcontroller',

    onResetClick: function () {
        this.getView().reset();
    },

    onCompleteClick: function () {
        var form = this.getView().getForm();

        if (form.isValid()) {
            // make ajax request
            form.submit({
              url: `http://localhost:7000/${paymentUrl}`,
              method: "POST",
              jsonSubmit: true, 
              headers: {
                "Content-Type": "application/json",
              },
      
              success: function (form, action) {
                Ext.Msg.alert("Success", );
              },
      
              failure: function (form, action) {
                Ext.Msg.alert("Failed", action.result.msg);
              },
            });
          } else {
            Ext, Msg.alert("Invalid Form Data. Please Correct!!");
          }
    },


});
