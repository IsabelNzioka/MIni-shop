Ext.define('Mini.app.view.checkout.CheckoutFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.checkoutformcontroller',

    onResetClick: function () {
        this.getView().reset();
    },

    onCompleteClick: function () {
        var form = this.getView().getForm();

        if (form.isValid()) {
            Ext.Msg.alert('Success', 'Your order has been paid.');
            form.reset();
        } else {
            Ext.Msg.alert('Error', 'Please fill in all required fields.');
        }
    },


});
