Ext.define('Mini.app.view.orders.OrderDetailsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.orderdetailscontroller',

    loadOrderData: function (orderId) {
        Ext.Ajax.request({
            url: `http://localhost:7000/api/v1/orders/orderItems/${recordId}`,
            method: "GET",
            success: function (response, opts) {
                var data = Ext.decode(response.responseText);
                this.getView().getViewModel().setData({
                    record: data
                });
            },

            failure: function (response, opts) {
                console.log(
                    "server-side failure with status code " + response.status
                );
            },
            scope: this
        });
        
  }
});
